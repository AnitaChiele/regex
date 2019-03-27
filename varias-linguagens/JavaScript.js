const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegExp:')

// retorna true ou false
console.log(regexNove.test(texto))

// retorna a posição do objeto encontrado
console.log(regexNove.exec(texto))

const regexLetras = /[a-f]/g
console.log("\n\n\n Métodos da string:")

// mostra todas as ocorrências da busca que foram encontradas:
console.log(texto.match(regexLetras))

// retorna o índice do primeiro elemento que ele encontrou:
console.log(texto.search(regexLetras))

// faz replace nas ocorrências achadas.
console.log(texto.replace(regexLetras, 'Achei'))

console.log(texto.split(regexLetras))

