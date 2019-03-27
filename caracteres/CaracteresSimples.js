const texto = '1,2,3,4,5,6a.b c!d?e'

console.log("/****************************************/")
console.log("/***       Caracteres Simples.js      ***/")
console.log("/****************************************/\n")
// alguns caracteres são reservados - metacaracteres (que compõem a expressão regular)
const regexVirgula = /,/

console.log("Exemplo 01: ")
console.log(texto.split(regexVirgula))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
// indices começam no zero
// no exemplo abaixo como não foi setada a flag de global no regexVirgula, ele irá parar
// no primeiro resultado que encontrar.
console.log(texto.match(regexVirgula))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
// irá trazer todos os resultados por causa da flag global "g"
console.log(texto.match(/,/g))

console.log("\n\n===========================================")
console.log("Exemplo 04: ")
console.log(" "+texto.match(/A/))
console.log("\nExemplo [04.01]: ")
console.log(" "+texto.match(/A/g))
console.log("\nExemplo [04.02]: ")
console.log(" "+texto.match(/A/gi))
console.log("\nExemplo [04.03]: ")
console.log(" "+texto.match(/a/gi))

console.log("\n\n===========================================")
console.log("Exemplo 05: ")
console.log(texto.match(/2/g))

console.log("\n\n===========================================")
console.log("Exemplo 06: ")
console.log(texto.match(/b c!d/))