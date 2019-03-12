console.log("/****************************************/")
console.log("/***          shorthands.js           ***/")
console.log("/****************************************/\n")

const texto = `1,2,3,4,5,6,a.b c!d?e\r	-
f_g`

console.log("\n\n===========================================")
console.log("Exemplo 01: Números [0-9]")
// o shorthands é o \d
console.log(texto.match(/\d/g))

console.log("\n\n===========================================")
console.log("Exemplo 02: Não númericos [^0-9]")
// o shorthands é o \D trás tudo que não é numérico inclusive símbolos,
// pontuações, acentuações e etc.
console.log(texto.match(/\D/g))

console.log("\n\n===========================================")
console.log("Exemplo 03: [a-zA-Z0-9_] ")
console.log(texto.match(/\w/g))

console.log("\nExemplo [03.01]: Não caracteres [^ a-zA-Z0-9_]")
console.log(texto.match(/\W/g))

console.log("\n\n===========================================")
// [\t\n\r\f]
console.log("Exemplo 04: Espaços em branco")
console.log(texto.match(/\s/g))

// [^ \t\n\r\f]
console.log("\nExemplo [04.01]: Tudo que não é espaço em branco.")
console.log(texto.match(/\S/g))
