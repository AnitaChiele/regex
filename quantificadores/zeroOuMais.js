console.log("/****************************************/")
console.log("/***           tantoFaz.js            ***/")
console.log("/****************************************/\n")

const t1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const t2 = 'There is a big fog in NYC'

// * -> zero ou mais
// o * que toca o caracter anterior define que ele tem que ter zero ou
// mais caracteres.
// Segundo o exemplo abaixo:
// Será procurado por: fog, fogo, fogoo[...] (case insensitive)
const regex = /fogo*/gi

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t1.match(regex))
console.log(t2.match(regex))
