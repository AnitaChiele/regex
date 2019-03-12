console.log("/****************************************/")
console.log("/***             zeroUm.js            ***/")
console.log("/****************************************/\n")

const t1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO'
const t2 = 'There is a big fog in NYC'

// ? -> zero ou um (opcional)
// o ponto de interrogação que toca o caracter anterior define que ele é
// opcional, ou seja, pode ter um, ou nenhum.
// Segundo o exemplo abaixo:
// Será procurado por: fogo ou fog (case insensitive)
const regex = /fogo?/gi

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t1.match(regex))
console.log(t2.match(regex))