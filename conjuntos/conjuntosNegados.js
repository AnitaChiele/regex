console.log("/****************************************/")
console.log("/***       conjuntosNegados.js        ***/")
console.log("/****************************************/\n")

const texto = '1,2,3,4,5,6a.b c!d?e[f'

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
// tudo que não é numérico ele pega.
console.log(texto.match(/\D/g))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
// tudo que não é numérico ele pega.
console.log(texto.match(/[^0-9]/g))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(texto.match(/[^\d!\?[\s,\.]/g))


var t2 = '1: !"#$%\'()*+,-./ 2: :;<=>?@'
console.log("\n\n===========================================")
console.log("Exemplo 04: ")
// dois intervalos:
// !-/
// :-@
// sem os espaços
// todos os símbolos foram removidos por causa da tabela unicode.
console.log(t2.match(/[^!-/:-@\s]/g))