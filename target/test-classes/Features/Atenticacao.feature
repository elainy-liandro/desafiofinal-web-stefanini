#language: pt
#Author: Elainy Rodrigues
#Data 02/05/2021
@Login @End2End
Funcionalidade: Autenticacao

  Contexto: 
    Dado que o usuario esteja na pagina de autenticacao

  @Autenticacao @SmokeTest
  Esquema do Cenario: Realizar autenticacao com Sucesso
    Quando informar o campo Username como "<username>"
    E informar o campo Password como "<password>"
    E clicar no botao Login
    Entao o sistema devera autorizar a autenticacao exibindo pagina logada

    Exemplos: 
      | username        | password     |
      | standard_user   | secret_sauce |
      
  @AutenticacaoUsuarioBloquado @SmokeTest
  Esquema do Cenario: Realizar autenticacao sem Sucesso
    Quando informar o campo Username como "<username>"
    E informar o campo Password como "<password>"
    E clicar no botao Login
    Entao o sistema devera apresentar mensagem de usuario bloquado

    Exemplos: 
      | username        | password     |
      | locked_out_user | secret_sauce |
