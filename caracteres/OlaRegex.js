const texto = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.'

/*
    Flags:

    g - global
    i - ignora a diferença de maiúscula e minúscula.
*/
const regex = /casa/gi

console.log(texto.match(regex))
// expressão regular direto dentro do método .match
console.log(texto.match(/a b/))
console.log(texto.match(/a a/))