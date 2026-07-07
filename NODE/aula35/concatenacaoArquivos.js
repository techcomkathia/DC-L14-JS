/*// 2 --Leitura e escrita de arquivos com o módulo fs
// crie 2 arquivos de texto:
// texto1.txt: com algum conteúdo de sua escolha
// texto2.txt: com algum conteúdo de sua escolha
// concatene o conteúdo dos dois arquivos em um terceiro arquivo chamado texto3.txt.

//Dica: caso use a função readFile, lembre-se que ela é assíncrona, então você precisará fazer a leitura do segundo arquivo dentro do callback da leitura do primeiro arquivo.
//Caso use a função readFileSync, você poderá fazer a leitura dos dois arquivos de forma síncrona, sem precisar de callbacks, apenas armazenando o conteúdo de cada arquivo em uma variável e depois concatenando essas variáveis para escrever no terceiro arquivo.

// Importante tratar os erros de leitura e escrita dos arquivos, caso ocorra algum erro, exibir uma mensagem no console com o erro ocorrido, de forma clara para o usuário.*/

const fs = require('fs');

function concatenarArquivosSincrono(caminhoArquivo1, caminhoArquivo2, arquivoDestino) {
    //como essa função é sincrona, vamos trabalhar com os métodos sincronos

    const conteudoArquivo1 = fs.readFileSync(caminhoArquivo1, 'utf-8');
    const conteudoArquivo2 = fs.readFileSync(caminhoArquivo1, 'utf-8');

    const conteudoConcatenado = `Resultado da concatenação \n${conteudoArquivo1}\n\n${conteudoArquivo2}`;
    fs.writeFileSync(arquivoDestino, conteudoConcatenado);
    
}

// alternativa de função assíncrona, mas com callbacks, que é mais complexa de se trabalhar

async function concatenarArquivosAssincrono(caminhoArquivo1, caminhoArquivo2, arquivoDestino) {

    fs.readFile( caminhoArquivo1, 'utf-8', (err, c1) => {
        if (err) {
            console.log('Erro ao ler o arquivo 1:', err.message);
            return;
        }

        fs.readFile( caminhoArquivo2, 'utf-8', (err, conteudoArquivo2) => {
            if (err) {
                console.log('Erro ao ler o arquivo 2:', err.message);
                return;
            }
            
            const conteudoConcatenado = `Resultado da concatenação \n${c1}\n exemplo`;
            fs.writeFile(arquivoDestino, conteudoConcatenado, (err) => {
                if (err) {
                    console.log('Erro ao escrever o arquivo de destino:', err.message);
                    return;
                }
            });
        });

    })

}


module.exports = {
    concatenarArquivosSincrono,
    concatenarArquivosAssincrono
}