const fs = require('fs');
//leitura de um conteudo de um arquivo

//leitura de um conteudo de um arquivo de modo assincrono
fs.readFile('texto.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo:', err.message);
        return;
    }
    console.log('Conteúdo do arquivo:', data);    
});

console.log('fui executado antes da leitura do arquivo');

const conteudoSincrono = fs.readFileSync('texto.txt', 'utf-8');
/*
console.log('Conteúdo do arquivo (sincrono):', conteudoSincrono);

console.log('fui executado depois da leitura do arquivo');

//escrita de um conteudo em um arquivo
// writeFile: cria um arquivo e escreve o conteudo, caso o arquivo já exista, ele será sobrescrito - assincrono
// writeFileSync: cria um arquivo e escreve o conteudo, caso o arquivo já exista, ele será sobrescrito - sincrono

fs.writeFile('texto2.txt', 'Conteudo do arquivo  que será criado na primeira execução', (err) => {
    if (err) {
        console.log('Erro ao escrever/criar no arquivo:', err.message);
        return;
    }
})*/

fs.writeFile('texto2.txt', 'Conteudo que vai sobreescrever o anterior', (err) => {
    if (err) {
        console.log('Erro ao escrever/criar no arquivo:', err.message);
        return;
    }
})

//criando um arquivo dentro de uma pasta, caso a pasta a exista, será criado automaticamente
fs.writeFile('./pasta/texto2.txt', 'Conteudo que vai sobreescrever o anterior', (err) => {
    if (err) {
        console.log('Erro ao escrever/criar no arquivo:', err.message);
        return;
    }
})