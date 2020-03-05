import compiler from 'vue-template-compiler'
import { component } from './data.es'

const output = compiler.parseComponent(component.raw, { pad: 'line' });


console.log("output.script", output.script);