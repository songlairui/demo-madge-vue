const compiler = require('vue-template-compiler')
const { component } = require('./data')
const output = compiler.parseComponent(component.raw, { pad: 'line' });


console.log("output.script", output.script);