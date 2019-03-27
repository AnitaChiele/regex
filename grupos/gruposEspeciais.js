console.log("/****************************************/")
console.log("/***        gruposEspeciais.js        ***/")
console.log("/****************************************/\n")

const t = 'João é calmo, mas no transito fica nervoso.'

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/[\wÀ-ú]+/gi))


// Positive lookhead
console.log("\n\n===========================================")
console.log("Exemplo 02: ")
// procure uma palavra que olhando pra frente tenha uma vírgula.
console.log(t.match(/[\wÀ-ú]+(?=,)/gi))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
// procure uma palavra que olhando pra frente tenha um ponto.
console.log(t.match(/[\wÀ-ú]+(?=.)/gi))

console.log("\n\n===========================================")
console.log("Exemplo 04: ")
// procure uma palavra que olhando pra frente tenha vírgula mas.
console.log(t.match(/[\wÀ-ú]+(?=, mas)/gi))

// Negative lookhead
console.log("\n\n===========================================")
console.log("Exemplo 05: ")
// procure uma palavra que olhando pra frente tenha não tenham uma vírgula.
console.log(t.match(/[\wÀ-ú]+\b(?!,)/gi))

console.log("\n\n===========================================")
console.log("Exemplo 06: ")
console.log(t.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))