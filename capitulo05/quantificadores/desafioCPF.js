console.log("/****************************************/")
console.log("/***          desafioCPF.js           ***/")
console.log("/****************************************/\n")


const t = `CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-23 ...`

console.log(t.match(/[\d\.\-]{14}?/g))