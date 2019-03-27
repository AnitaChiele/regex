console.log("/****************************************/")
console.log("/***           naoGuloso.js           ***/")
console.log("/****************************************/\n")

const t = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantificadores são gulosos(greedy)
console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/<div>.+<\/div>/g))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(t.match(/<div>.*<\/div>/g))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(t.match(/<div>.{0,100}<\/div>/g))

console.log("\n\n===========================================")
console.log("Exemplo 04: ")
console.log(t.match(/<div>.{0,}<\/div>/g))

// quantificadores não gulosos(lazy)
// adicionar o ponto de interrogação após o quantificador.
console.log("\n\n===========================================")
console.log("Exemplo 05: ")
console.log(t.match(/<div>.+?<\/div>/g))

console.log("\n\n===========================================")
console.log("Exemplo 06: ")
console.log(t.match(/<div>.*?<\/div>/g))

console.log("\n\n===========================================")
console.log("Exemplo 07: ")
console.log(t.match(/<div>.{0,100}?<\/div>/g))

console.log("\n\n===========================================")
console.log("Exemplo 08: ")
console.log(t.match(/<div>.{0,}?<\/div>/g))