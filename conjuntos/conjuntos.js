console.log("/****************************************/")
console.log("/***           Conjuntos.js           ***/")
console.log("/****************************************/\n")

const texto = '1,2,3,4,5,6a.b c!d?e[f'

// para definir conjuntos de caracteres utiliza-se: []
const paresConj = /[02468]/g

console.log("Exemplo 01: ")
console.log(texto.match(paresConj))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
var teste1 = /02468/g
console.log(texto.match(teste1))

console.log("\n\n===========================================")
var teste1 = /[46028]/g
console.log("Exemplo 03: ")
console.log(texto.match(teste1))

console.log("\n\n===========================================")
console.log("Exemplo 04: ")
var texto2 = 'João não vai passear na moto.'
var rComESemAcento = /n[ãa]./g
console.log(texto2.match(rComESemAcento))

console.log("\n Exemplo [04.01]: ")
var rComESemAcento = /n[ãa]/g
console.log(" "+texto2.match(rComESemAcento))