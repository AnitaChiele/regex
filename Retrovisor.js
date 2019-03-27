console.log("/****************************************/")
console.log("/***          Retrovisor.js           ***/")
console.log("/****************************************/\n")

// quando utilizamos grupos e ele consegue achar uma ocorrência válida,
// ele "captura" esta ocorrência e essa passa a ser acessível por \n
// sendo "n" o número do grupo que deseja utilizar.

const t = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.match(/<(\w+)>.*<\/\1>/g))

var t2 = '<b>Destaque</B><strong>Forte</strong><div>Conteudo</div>'

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
console.log(t2.match(/<(\w+)>.*<\/\1>/g))

console.log("\n\n===========================================")
console.log("Exemplo 03: ")
console.log(t2.match(/<(\w+)>.*<\/\1>/gi))

var t3 = 'Lentamente é mente muito lenta.'

console.log("\n\n===========================================")
console.log("Exemplo 04: ")
console.log(t3.match(/(lenta)(mente)/gi))

console.log("\n\n===========================================")
console.log("Exemplo 05: ")
console.log(t3.match(/(lenta)(mente).*/gi))

console.log("\n\n===========================================")
console.log("Exemplo 06: ")
console.log(t3.match(/(lenta)(mente).*\2/gi))

console.log("\n\n===========================================")
console.log("Exemplo 07: ")
console.log(t3.match(/(lenta)(mente).*\2.*\1/gi))

console.log("\n\n===========================================")
console.log("Exemplo 08: ")
// para não armazenar a palvra ou caracter basta utilizar ?:
console.log(t3.match(/(?:lenta)(mente).*\1/gi))
// agora o retrovisor é a palavra mente.

console.log("\n\n===========================================")
console.log("Exemplo 09: ")
// com replace:
console.log(t3.replace(/(lenta)(mente)/gi, '$2'))

console.log("\n\n===========================================")
console.log("Exemplo 10: ")
// com replace no meio:
console.log(t3.replace(/(lenta)(mente)/gi, 'ABC$2DEF'))