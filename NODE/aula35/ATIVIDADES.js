// 1 --Produção do módulo bancário

//criação das funções do módulo bancário: abrir conta, depositar, sacar e extrato

//função para abrir conta: receberá como parâmetro o nome do cliente, numero da conta, agencia e o saldo inicial da conta, retornando um objeto com as informações da conta. Caso o saldo inicial não seja informado, o valor padrão será 0. (utilizar valor padrão para variável da função)

//função para depositar: receberá como parâmetro o objeto da conta e o valor a ser depositado, retornando o novo saldo da conta e mostrando uma mensagem de sucesso no console. Caso o valor do depósito seja negativo, retornar uma mensagem de erro.

//função para sacar: receberá como parâmetro o objeto da conta e o valor a ser sacado, retornando o novo saldo da conta e mostrando uma mensagem de sucesso no console. Caso o valor do saque seja negativo ou maior que o saldo da conta, retornar uma mensagem de erro.

//função para extrato: receberá como parâmetro o objeto da conta, retornando o saldo atual da conta e mostrando uma mensagem no console com o saldo atual.

//IMPORTE NO ARQUIVO main.js e teste as funções do módulo bancário




// 2 --Leitura e escrita de arquivos com o módulo fs
// crie 2 arquivos de texto:
// texto1.txt: com algum conteúdo de sua escolha
// texto2.txt: com algum conteúdo de sua escolha
// concatene o conteúdo dos dois arquivos em um terceiro arquivo chamado texto3.txt.

//Dica: caso use a função readFile, lembre-se que ela é assíncrona, então você precisará fazer a leitura do segundo arquivo dentro do callback da leitura do primeiro arquivo.
//Caso use a função readFileSync, você poderá fazer a leitura dos dois arquivos de forma síncrona, sem precisar de callbacks, apenas armazenando o conteúdo de cada arquivo em uma variável e depois concatenando essas variáveis para escrever no terceiro arquivo.

// Importante tratar os erros de leitura e escrita dos arquivos, caso ocorra algum erro, exibir uma mensagem no console com o erro ocorrido, de forma clara para o usuário.


/*

Atividade 3 - Manipulação de arquivos JSON

Crie um módulo que funcione como gestor de um banco de dados json.

uma função para ler o conteúdo de um arquivo json e retornar o objeto javascript correspondente.

uma função para escrever o conteúdo de um objeto javascript em cada uma das coleções do arquivo json.

uma função para buscar um objeto dentro de uma coleção do arquivo json. A função deve receber como parâmetro o nome da coleção e o id do objeto a ser buscado, retornando o objeto correspondente OU uma mensagem de erro caso o objeto não seja encontrado.
*Dica use o método find() para buscar o objeto dentro da coleção.
*/

