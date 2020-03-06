const precinct = require('precinct')
const compiler = require('vue-template-compiler')
const fs = require('fs')
const path = require('path')
const cabinet = require('filing-cabinet')

const debug = require('debug')('vue-madge polyfill');

// 修饰 precinct.paperwork, 令之遇到vue文件, 去除template部分, 当作js文件处理
function decoratePrecinct() {
    const old = precinct.paperwork
    if (!old._old) {
        precinct.paperwork = function (filename, options) {
            var ext = path.extname(filename);
            let newOptions = options

            if (newOptions.fileSystem && newOptions.fileSystem._vue) {
                console.info('遭到了沿用')
                delete newOptions.fileSystem
            }
            let newFilename = filename
            if (ext === '.vue') {
                newFilename = filename.replace(/\.vue$/, '.jsx') // 替换为 jsx 结尾
                newOptions = {
                    ...options, fileSystem: {
                        readFileSync() {
                            const originStr = fs.readFileSync(filename, 'utf8');
                            delete newOptions.fileSystem
                            return compiler.parseComponent(originStr, { pad: 'line' }).script.content
                        }
                    }
                }
                newOptions.fileSystem._vue = true
            }
            return old.call(this, newFilename, newOptions)
        }
        precinct.paperwork._old = old
    }
}

// 配置 filing-cabiet 的Lookup, 让其能够取得带alias的vue路径如 '@/src/something.vue'
function configCabiet() {

    let webpackResolve;
    const isRelative = require('is-relative-path');
    // copy from cabiet
    function stripLoader(dependency) {
        const exclamationLocation = dependency.indexOf('!');

        if (exclamationLocation === -1) { return dependency; }

        return dependency.slice(exclamationLocation + 1);
    }
    // copy from cabiet
    function resolveWebpackPath({ dependency, filename, directory, webpackConfig }) {
        if (!webpackResolve) {
            webpackResolve = require('enhanced-resolve');
        }
        webpackConfig = path.resolve(webpackConfig);
        let loadedConfig;

        try {
            loadedConfig = require(webpackConfig);

            if (typeof loadedConfig === 'function') {
                loadedConfig = loadedConfig();
            }
        } catch (e) {
            debug('error loading the webpack config at ' + webpackConfig);
            debug(e.message);
            debug(e.stack);
            return '';
        }

        const resolveConfig = Object.assign({}, loadedConfig.resolve);

        if (!resolveConfig.modules && (resolveConfig.root || resolveConfig.modulesDirectories)) {
            resolveConfig.modules = [];

            if (resolveConfig.root) {
                resolveConfig.modules = resolveConfig.modules.concat(resolveConfig.root);
            }

            if (resolveConfig.modulesDirectories) {
                resolveConfig.modules = resolveConfig.modules.concat(resolveConfig.modulesDirectories);
            }
        }

        try {
            const resolver = webpackResolve.create.sync(resolveConfig);
            dependency = stripLoader(dependency);
            const lookupPath = isRelative(dependency) ? path.dirname(filename) : directory;
            return resolver(lookupPath, dependency);
        } catch (e) {
            debug('error when resolving ' + dependency);
            debug(e.message);
            debug(e.stack);
            return '';
        }
    }
    // copy and modify from jsLookup in cabiet
    function vueLookup({ dependency, filename, directory, config, webpackConfig, configPath, nodeModulesConfig, ast }) {
        const type = cabinet._getJSType({
            config: config,
            webpackConfig: webpackConfig,
            filename: filename,
            ast: ast
        });

        switch (type) {
            case 'webpack':
                debug('using webpack resolver for es6');
                return resolveWebpackPath({ dependency, filename, directory, webpackConfig });
            case 'amd':
            case 'commonjs':
            case 'es6':
            default:
                throw new Error('only webpack ')
        }
    }
    cabinet.register('.vue', vueLookup)
}

decoratePrecinct()
configCabiet()