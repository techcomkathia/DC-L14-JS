const API_BASE_URL = 'https://api.exemplo.com';

export async function buscarProdutos() {
  try {
    const response = await fetch(`${API_BASE_URL}/produtos`);
    return await response.json();
  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    throw erro;
  }
}

export async function buscarProdutoPorId(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/produtos/${id}`);
    return await response.json();
  } catch (erro) {
    console.error('Erro ao buscar produto:', erro);
    throw erro;
  }
}
