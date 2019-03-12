console.log("/****************************************/")
console.log("/***      intervalosCuidados.js       ***/")
console.log("/****************************************/\n")

const texto = 'ABC [abc] a-c 1234'

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(texto.match(/[a-c]/g))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
// isto não é um intervalo de fato pq para ser um intervalo - range DEVE
// estar dentro de um conjunto []
console.log(texto.match(/a-c/g))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
// intervalos usam a ordem da tabela unicode
// segundo a tabela (unicode-table.com) entre o A (maiúsculo) até o z
// (minúsculo) tem alguns símbolos no meio.
console.log(texto.match(/[A-z]/g))
console.log("\nExemplo [03.01]:")
console.log(" "+texto.match(/[A-Za-z]/g))

console.log("\n\n===========================================")
console.log("Exemplo 04: ")
// tem que respeitar a ordem da tabela unicode.
// o código abaixo está comentado porque gera erro.
// SyntaxError: Invalid regular expression: /[a-Z]/: Range out of
// order in character class at Object.<anonymous
// console.log(texto.match(/[a-Z]/g))
// console.log(texto.match(/[4-1]/g))

