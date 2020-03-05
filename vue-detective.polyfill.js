const precinct = require('precinct')
const compiler = require('vue-template-compiler')
const fs = require('fs')
const path = require('path')

function decorate() {
    const old = precinct.paperwork
    if (!old._old) {
        precinct.paperwork = function (filename, options) {
            var ext = path.extname(filename);
            let newOptions = options
            let newFilename = filename
            if (ext === '.vue') {
                newFilename = filename.replace(/\.vue$/, '.jsx') // 替换为 jsx 结尾
                newOptions = {
                    ...options, fileSystem: {
                        readFileSync() {
                            const originStr = fs.readFileSync(filename, 'utf8');
                            return compiler.parseComponent(originStr, { pad: 'line' }).script.content
                        }
                    }
                }

            }
            return old.call(this, newFilename, newOptions)
        }
        precinct.paperwork._old = old
    }
}

decorate()