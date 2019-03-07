console.log("/****************************************/")
console.log("/***      metacaracters/Ponto.js      ***/")
console.log("/****************************************/\n")

// . - é um coringa, válido para uma posicão, porém, não engloba a resolução do \n.

const t = '1,2,3,4,5,6,7,8,9'

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
// o ponto libera para achar qualquer coisa entre os dois caracteres, ou seja, entre 1 e 2.
// Acha qualquer ocorrência que tenha o número 1 e 2 e no meio deles, tenha qualquer caracter.
console.log(t.match(/1.2/g))

var t02 = '1e2'
console.log("\nExemplo [01.02]: ")
console.log(" "+t02.match(/1.2/g))

var t02 = '192'
console.log("\nExemplo [01.03]: ")
console.log(" "+t02.match(/1.2/g))

var t02 = '1-2'
console.log("\nExemplo [01.04]: ")
console.log(" "+t02.match(/1.2/g))

var t02 = '12'
console.log("\nExemplo [01.05]: ")
console.log(" "+t02.match(/1.2/g))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(t.match(/1..2/g))

var t02 = '10,2'
console.log("\nExemplo [02.02]: ")
console.log(" "+t02.match(/1..2/g))

var t02 = '1,0,2'
console.log("\nExemplo [02.03]: ")
console.log(" "+t02.match(/1...2/g))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(t.match(/1..,/g))

const notas = '8.3,7.1,8.8,10.0'
console.log("\n\n===========================================")
console.log("Exemplo 04: ")
console.log(notas.match(/8../g))

console.log("\n\n===========================================")
console.log("Exemplo 05: ")
console.log(notas.match(/.\../g))