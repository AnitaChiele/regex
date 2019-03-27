console.log("/****************************************/")
console.log("/***        gruposCuidados.js         ***/")
console.log("/****************************************/\n")

const t = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

// dentro de um conjunto o grupo não existe!
console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/[(abc)]/gi))

// dentro de um grupo podemos ter conjuntos!
console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(t.match(/([abc])/gi))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(t.match(/(abc)+/gi))
