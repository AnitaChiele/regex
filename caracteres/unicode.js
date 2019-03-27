console.log("/****************************************/")
console.log("/***            unicode.js            ***/")
console.log("/****************************************/\n")

// no início
// 1 caracter == Um byte (8 bits) - 256 caracteres
// Símbolos, pontuações, A-Z, a-z, 0-9.

// Dois bytes (16 bits) - 65500+ caracteres
// + Símbolos, + pontuações, A-Z, a-z, 0-9.

// Unicode
// Quantidade de bytes variável - Expansível.
// Suporta mais de 1 Milhão de caracteres.
// Atualmeente tem mais de 100.000 caracteres atribuídos.

// https://unicode-table.com/pt/

const t = 'aʬc௵d'

// para fazer busca pelo código hexadecimal utilizar o \u:
console.log(t.match(/\u02AC|\u0BF5/g))