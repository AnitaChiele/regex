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

// para selecionar os números válidos é necessário que o ddd seja
// obrigatório, ou ao menos, que o grupo (na regex) do ddd não seja
// opcional.
var t2 = `
Lista telefonica:
  - (21) 1234-6789
  - (11) 62300-2234
  - (51)5678-7771
  - (85)3333-7890
  - (1) 4321-1234
`
console.log(t2.match(/(\(\d{2}\)\s?)\d{4,5}-\d{4}/g))