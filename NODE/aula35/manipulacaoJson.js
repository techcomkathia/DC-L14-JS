//importar o módulo fs
const fs = require('fs');

//leitura e escrita 

//leitura de um conteudo de um arquivo json
const conteudoJson = fs.readFileSync('bancoJson.json', 'utf-8');
//conversão do conteudo json para objeto javascript
const objetoJson = JSON.parse(conteudoJson);

//Adicionar uma nova fruta ao objeto
objetoJson.frutas.push({id: 4, nome: 'Abacaxi', preco: 2.5});

//armazenar o objeto atualizado em um arquivo json
const novoConteudoJson = JSON.stringify(objetoJson); //converte o objeto para json

//escrevendo o novo conteudo no arquivo json
fs.writeFileSync('bancoJson.json', novoConteudoJson, 'utf-8');