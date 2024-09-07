import {defineConfig} from "es-pkg";

export default defineConfig({
    "entry": './src/index.ts',
    "es": "./es",
    "lib": "./lib",
    "typings": "./es",
    "publishDir": "../privily-npm",
    "doc":{
        caseDir:'./examples/cases'
    }
})