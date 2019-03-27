console.log("/****************************************/")
console.log("/***             Grupos.js            ***/")
console.log("/****************************************/\n")

const t = 'O José Simão é muito engraçado... hehehehehehe'

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/(he)/g))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(t.match(/(he)+/g))

const t2 = 'http://www.site.info www.escola.ninja.br google.com.ag'

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(t2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))
