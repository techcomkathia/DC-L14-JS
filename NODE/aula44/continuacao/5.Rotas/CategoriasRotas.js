
//criação das rotas para categorias:
//ambas as rotas são privadas, teremos também o middleware de validação dos dadas
//post /categoria (privada)
//put /categoria/:id (privada)
//get /categoria (pública)

//rota.metodo('url', controlador) -> rotas públicas
//rota.metodo('url', middleware, controlador) -> rotas privadas
//rotas privadas + validação de dados -> 2 middlewares
//rota.metodo('url', middleware1, middleware2, controlador)

//IMPORTANTE : Para rota get faça o serviço, controlador e aplique a rota. A rota get será a única rota pública para categorias.

