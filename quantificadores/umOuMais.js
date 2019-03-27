console.log("/****************************************/")
console.log("/***           umOuMais.js            ***/")
console.log("/****************************************/\n")

const t1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const t2 = 'There is a big fog in NYC'

// + -> um ou mais
// o + que toca o caracter anterior define que ele tem que ter no mínimo
// 1 caracter daquele.
// Segundo o exemplo abaixo:
// Será procurado por: fogo, fogoo (case insensitive)
const regex = /fogo+/gi

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t1.match(regex))
console.log(t2.match(regex))

var t3 = 'Os números: 0123456789.'

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(t3.match(/[0-9]/g))

console.log("\nExemplo [02.01]")
console.log(t3.match(/\d/g))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(t3.match(/[0-9]+/g))

console.log("\nExemplo [03.01]")
console.log(t3.match(/\d+/g))
