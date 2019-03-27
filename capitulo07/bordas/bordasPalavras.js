console.log("/****************************************/")
console.log("/***        bordasPalavras.js         ***/")
console.log("/****************************************/\n")

// temos problemas com bordas quando as palavras estão acentuadas.
// caracteres acentuados são considerados bordas...

const t = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
// \b = Borda
console.log(t.match(/\bdia\w+/gi))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(t.match(/\bdia\w*/gi))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(t.match(/\w+dia\b/gi))

console.log("\n\n===========================================")
console.log("Exemplo 04: ")
console.log(t.match(/\w+dia\w+/gi))

console.log("\n\n===========================================")
console.log("Exemplo 05: ")
console.log(t.match(/\w*dia\w*/gi))

console.log("\n\n===========================================")
console.log("Exemplo 06: ")
console.log(t.match(/\bdia\b/gi))

var t2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

console.log("\n\n===========================================")
console.log("Exemplo 07: ")
console.log(t2.match(/\bdia\b/gi))

console.log("\n\n===========================================")
console.log("Exemplo 08: ")
console.log(t2.match(/(\S*)?dia(\S*)?/gi))

console.log("\n\n===========================================")
console.log("Exemplo 09: ")
console.log(t2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))