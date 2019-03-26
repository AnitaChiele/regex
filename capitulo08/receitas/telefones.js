console.log("/****************************************/")
console.log("/***           Telefones.js           ***/")
console.log("/****************************************/\n")


const t = `

Lista telefonica:
  - (21) 1234-6789
  - (11) 62300-2234
  - 5678-7771
  - (85)3333-7890
  - (1) 4321-1234
`

// lembrando que ele seleciona o último número que é inválido,
// porém, ele trás esse número sem o ddd que é inválido no regex.
console.log(t.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))