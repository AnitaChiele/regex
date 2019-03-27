/*
    Flags:

    g - global
    i - ignora a diferença de maiúscula e minúscula.
 */

const texto = 'Carlos assinou o abaixo-assinado.'
// em javascript tudo que estiver dentro de duas barras está a expressão regular.
console.log('C ou ab: '); console.log(texto.match(/C|ab/));
console.log('c ou ab [i]: '); console.log(texto.match(/c|ab/i));
console.log('c ou ab: '); console.log(texto.match(/c|ab/));