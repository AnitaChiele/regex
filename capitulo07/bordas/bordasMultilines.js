console.log("/****************************************/")
console.log("/***       bordasMultilines.js         ***/")
console.log("/****************************************/\n")

const t = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/\n/gi))

console.log("\n\n===========================================")
// flag m = multiline
console.log("Exemplo 02: ")
console.log(t.match(/^(\w).+\1$/gim))


var t2 = `
Leo é muito legal
Emanuel foi jogar em Sergipe.
Bianca é casada com Habib
`

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(t2.match(/^(\w).+\1$/gim))

console.log("\n\n===========================================")
console.log("Exemplo 04: ")
console.log(t2.match(/^(\w).+\1\.$/gim))