#language: pt
#Author: Elainy Rodrigues
#Data 02/05/2021
@Carrinho @End2End
Funcionalidade: Carrinho

  Contexto: 
    Dado que o usuario esteja na pagina pagina logada
    Quando o sistema devera autorizar a autenticacao exibindo pagina logada
    E o sistema devera exibir um item incluido no carrinho

  @FinalizarCompra @SmokeTest
  Esquema do Cenario: Finalizar compra
    E o usuario clicar no botao carrinho
    E o usuario clicar no botao checkout
    E o usuario preecher seus dados pessoais e clicar no botao continue "<nome>" "<sobrenome>" "<cep>"
    E visulizar seu produto, seu valor, e sua taxa, e a quantidade de itens, e valorTotal "<nomeProduto>" "<valorProduto>" "<valorTaxa>" "<quantidadeItens>" "<valorTotal>"
    E o usuario clicar em finalizar
    Entao o sistema devera exibir mensagem de pedido efetuado "<msgPedidoRealizado>"

    Exemplos: 
      | nome | sobrenome | cep      | nomeProduto         | valorProduto | valorTaxa | quantidadeItens | valorTotal | msgPedidoRealizado       |
      | Jonh | Travolta  | 00000000 | Sauce Labs Backpack | $29.99       | $2.40     |               1 | $32.39     | THANK YOU FOR YOUR ORDER |
