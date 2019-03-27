console.log("/****************************************/")
console.log("/***             dotAll.js            ***/")
console.log("/****************************************/\n")

const t = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/^r.*r$/gi))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
// o \s\S seleciona tudo.
console.log(t.match(/^r[\s\S]*r$/gi))
