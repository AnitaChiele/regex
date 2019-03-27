console.log("/****************************************/")
console.log("/***         desafioEmails.js         ***/")
console.log("/****************************************/\n")


const t = `Os e-mails dos convidados são:
  - fulano@cod3r.com.br
  - xiico@gmail.com
  - joao@empresa.info.br
  - maria_silva@registro.br
  - rafa.sampaio@yahoo.com
  - teste@lol.com
`

// com dominios específicos:
console.log(t.match(/\w+@cod3r.com.br|gmail.com|empresa.info.br|registro.br|yahoo.com/g))

// domínios gerais:
console.log(t.match(/[\w.]+@[\w]+\.\w{2,4}\.?\w{0,2}/g))