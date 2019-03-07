const texto = '1,2,3,4,5,6a.b c!d?e'

console.log("/****************************************/")
console.log("/***         Metacaracteres.js        ***/")
console.log("/****************************************/\n")

console.log("| Metacaracter | Nome            | Significado                       |")
console.log("| .            | Ponto           | Qualquer caracter                 |")
console.log("| []           | Conjunto        | Conjunto de caracteres permitidos |")
console.log("| [^]          | Conjunto Negado | Conjunto de caracteres proibidos  |")

console.log("Metacaracters - Quantificadores:")
console.log("| Metacaracter | Nome      | Significado  |")
console.log("| ?            | Opcional  | Zero ou um   |")
console.log("| *            | Asterisco | Zero ou mais |")
console.log("| +            | Mais      | Um ou mais   |")
console.log("| {n,m}        | Chaves    | De n até m   |")

console.log("Metacaracters - Âncoras:")
console.log("| Metacaracter | Nome        | Significado              |")
console.log("| ^            | Circunflexo | Início de linha          |")
console.log("| $            | Cifrão      | Fim de linha             |")
console.log("| \b           | Borda       | Início ou fim de palavra |")

console.log("Outros Metacaracters:")
console.log("| Metacaracter | Nome       | Significado                        |")
console.log("| \            | Escape     | Uso de metacaracteres como literal |")
console.log("| |            | Ou         | Operação de OU                     |")
console.log("| ()           | Grupo      | Define um grupo                    |")
console.log("| \1...\9      | Retrovisor | Regasta grupos já definidos        |")

console.log("\n\n")

const t = '1,2,3,4,5,6,a.b c!d?e'

// para pesquisar pelo caracter e não utilizar o metacaracter é necessário escapar.
// Para escapar é só colocar uma contra-barra:
const regexPonto = /\./g

console.log("\n\n===========================================")
console.log("Exemplo 01: ")
console.log(t.split(regexPonto))

console.log("\n\n===========================================")
console.log("Exemplo 02: ")
// no exemplo abaixo ele procura por:
// vírgula ou ponto ou ponto de interrogação ou ponto de exclamação ou espaço.
const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))
