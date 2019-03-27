console.log("/****************************************/")
console.log("/***        conjuntoUnicode.js        ***/")
console.log("/****************************************/\n")

const t = 'áéíóú àèìòù âêîôû ç ãõ ü'

console.log("\n\n===========================================")
console.log("Exemplo 01: Acentuação")
console.log(t.match(/[Á-ü]/gi))

console.log("\nExemplo [01.01]: negação")
console.log(t.match(/[^\u00C0-\u02AF]/gi))

console.log("\nExemplo [01.02]: com o código da tabela unicode")
console.log(t.match(/[\u00C0-\u02AF]/gi))

console.log("\nExemplo [01.03]: negação")
console.log(t.match(/[^\u00C0-\u02AF]/gi))