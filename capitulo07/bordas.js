console.log("/****************************************/")
console.log("/***             bordas.js            ***/")
console.log("/****************************************/\n")

const t = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/r/gi))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
// o ^ fora do conjunto não é negação! é início de linha/string.
console.log(t.match(/^r/gi))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
// o $ é fim de linha/string.
console.log(t.match(/r$/gi))

var t2 = 'Romário era um excelente jogador, mas hoje é um político questionador'

console.log("\n\n===========================================")
console.log("Exemplo 04: ")
console.log(t.match(/^r.*r$/gi))
console.log(t2.match(/^r.*r$/gi))