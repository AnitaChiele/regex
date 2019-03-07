console.log("/****************************************/")
console.log("/***            Brancos.js            ***/")
console.log("/****************************************/\n")

const t = `
ca	r
r	o s!
`

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/ca/))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
// para considerar um tab utilizar o \t
console.log(t.match(/ca\t/))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(t.match(/ca\tr/))

console.log("\n\n===========================================")
console.log("Exemplo 04: ")
console.log(t.match(/ca\tr\n/))

console.log("\n\n===========================================")
console.log("Exemplo 05: ")
console.log(t.match(/ca\tr\nr/))

console.log("\n\n===========================================")
console.log("Exemplo 06: ")
console.log(t.match(/ca\tr\nr\t/))

console.log("\n\n===========================================")
console.log("Exemplo 07: ")
console.log(t.match(/ca\tr\nr\to/))

console.log("\n\n===========================================")
console.log("Exemplo 08: ")
// \s é metacaracter para representar espaço em branco.
// o \s também pode ser localizado quando for /t/n/f.
console.log(t.match(/ca\tr\nr\to\s/))

console.log("\nExemplo [08.01]:")
console.log(" "+t.match(/ca\tr\nr\to\t/))

console.log("\nExemplo [08.02]:")
console.log(" "+t.match(/ca\tr\nr\to\n/))

console.log("\nExemplo [08.03]:")
console.log(" "+t.match(/ca\tr\nr\to\f/))

console.log("\n\n===========================================")
console.log("Exemplo 09: ")
console.log(t.match(/ca\tr\nr\to\ss/))

console.log("\n\n===========================================")
console.log("Exemplo 10: ")
console.log(t.match(/ca\tr\nr\to\ss!/))