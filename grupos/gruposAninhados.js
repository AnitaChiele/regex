console.log("/****************************************/")
console.log("/***       gruposAninhados.js         ***/")
console.log("/****************************************/\n")

const t = 'supermercado hipermercado minimercado mercado'

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/(super|hiper|mini)?mercado/g))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(t.match(/((hi|su)per|mini)?mercado/g))
