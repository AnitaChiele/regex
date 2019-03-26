const fs = require('fs')

const read = nomeArquivo => fs.readFileSync(
  `${__dirname}/originais/${nomeArquivo}`, {encoding: 'utf-8'}
)

const write = (nomeArquivo, conteudo) => {
  const dirname = `${__dirname}/alterados`

  if(!fs.existsSync(dirname)){
    fs.mkdirSync(dirname)
  }

  fs.writeSync(`${dirname}/${nomeArquivo}`, conteudo, {encoding: 'utf-8'})
}

module.exports = {read, write}