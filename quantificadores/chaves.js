console.log("/****************************************/")
console.log("/***            chaves.js             ***/")
console.log("/****************************************/\n")

const t = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
// \d --> números
// no exemplo abaixo ele selecionará os números com no mínimo 1 caracter e
// no máximo 2 caracteres.
console.log(t.match(/\d{1,2}/g))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(t.match(/[0-9]{2}/g))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(t.match(/\d{1,}/g))

console.log("\n\n===========================================")
console.log("Exemplo 04: ")
console.log(t.match(/\w{7}/g))

var t2 = 'O João recebeu 120 milhoes apostando 6 9 21 23 45 46.'
console.log("\nExemplo [04.01]: ")
console.log(t2.match(/\w{7}/g))

console.log("\nExemplo [04.02]: ")
console.log(t.match(/[a-zá-ú]{7}/g))

console.log("\nExemplo [04.03]: ")
console.log(t.match(/[\wõ]{7}/g))

console.log("\nExemplo [04.04]: ")
console.log(t.match(/[\wõ]{7,}/g))

console.log("\nExemplo [04.05]: ")
console.log(t.match(/[\wõ\s]{7}/g))