console.log("/****************************************/")
console.log("/***             senha.js             ***/")
console.log("/****************************************/\n")

const t = `
123456
cod3r
QUASE123!
#Op41
#essaSenhaEGrande1234

#OpA1?
Foi123!
`

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/^.{6,20}$/gm))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(t.match(/^(?=.*[A-Z]).{6,20}$/gm))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(t.match(/^(?=.*[A-Z]).{6,20}$/gm))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(t.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&*-+=]).{6,20}$/gm))