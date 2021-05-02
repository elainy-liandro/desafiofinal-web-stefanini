#language: pt
#Author: Elainy Rodrigues
#Data 02/05/2021
@Produto @End2End
Funcionalidade: Produto

  Contexto: 
    Dado que o usuario esteja na pagina pagina logada
    Quando o sistema devera autorizar a autenticacao exibindo pagina logada

  @AdicionarProduto @SmokeTest
  Cenario: Adicionar produto ao carrinho
    E o usuario selecionar um produto
    E visulizar sua descricao
    E o usuario clicar em adicionar ao carrinho
    Entao o sistema devera exibir um item no carrinho
