console.log("/****************************************/")
console.log("/***              Ou.js               ***/")
console.log("/****************************************/\n")

const t = 'Você precisa responder sim, não ou não sei!'

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/sim|não|sei/g))

console.log("\nExemplo [01.02]: ")
console.log(" "+t.match(/sim|não|não sei/g))

console.log("\nExemplo [01.03]: ")
console.log(" "+t.match(/sim|não sei|não/g))

var t02 = 'Você precisa responder sim, não ou nao sei!'

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(t02.match(/sim|n.o|sei/g))