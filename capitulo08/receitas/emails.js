console.log("/****************************************/")
console.log("/***            emails.js             ***/")
console.log("/****************************************/\n")

const t = `
Os e-mails dos convidados são:
  - fulano@cod3r.com.br
  - xico@gmail.com
  - joao@empresa.info.br
  - maria_silva@registro.br
  - rafa.sampaio@yahoo.com
  - fulano+de+tal@escola.ninja.br
`

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g))