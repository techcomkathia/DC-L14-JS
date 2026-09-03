const API_BASE_URL = 'https://fakestoreapi.com';

export async function buscarProdutos() {
// porecisa fazer um fetch para a api e retornar os dados

 let resposta = await fetch(API_BASE_URL + '/products')
 let produtos = await resposta.json()
 return produtos
}
