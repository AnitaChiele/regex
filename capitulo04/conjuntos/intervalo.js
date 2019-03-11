console.log("/****************************************/")
console.log("/***           intervalo.js           ***/")
console.log("/****************************************/\n")

const texto = '1,2,3,4,5,6a.b c!d?e[f'

// os intervalos (range) funcionam dentro de um conjunto.
console.log("Exemplo 01: ")
console.log(texto.match(/[a-z]/g))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(texto.match(/[b-d]/g))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(texto.match(/[2-4]/g))

console.log("\n\n===========================================")
console.log("Exemplo 04: ")
// exemplo de dois intervalos:
// no exemplo abaixo a busca é por A até Z e por 1 até 3.
console.log(texto.match(/[A-Z1-3]/gi))

console.log("\n Exemplo [04.01]: ")
console.log(texto.match(/[A-Z1-3]/g))
