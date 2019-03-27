console.log("/****************************************/")
console.log("/***   conjuntos/metacaracteres.js    ***/")
console.log("/****************************************/\n")
// Aqui será estudado como os metacaracteres funcionam dentro de um
// conjunto.

const texto = '.$+*?-'

// dentro de um conjunto não é necessário escapar os metacaracteres para
// eles serem entendidos como o caracter literal.
console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(texto.match(/[+.?*$]./g))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
// neste caso o '-' não está sendo utilizado como literal, mas sim como um
// metacaracter que representa um intervalo (range).
console.log(texto.match(/[$-?]/g))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
// neste caso o '-' não é um metacaracter, é um caracter literal.
console.log(texto.match(/[$\-?]/g))

console.log("\n Exemplo [03.01]: ")
console.log(texto.match(/[-$?]/g))


console.log("\n\n===========================================")
console.log("Exemplo 04: ")
// neste caso o '-' não é um metacaracter, é um caracter literal.
console.log(texto.match(/[-?]/g))

// metascaracteres dentro de um conjunto que podem precisar de scape se
// quiser utilizá-los como caracteres literais:
// - [ ] ^