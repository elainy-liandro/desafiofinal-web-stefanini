#language: pt
#Author: Elainy Rodrigues
#Data 28/04/2021
@Login @End2End
Funcionalidade: Login

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema
    
	@RealizarLogin @SmokeTest
  Esquema do Cenario: Realizar login com Sucesso
    Quando informar o campo Username como "<usuario>"
    E informar o corpo Password  como "<senha>"
    E clicar no botao Login
    Entao o sistema devera autorizar o login, exibindo pagina contendo e Dasboard.

    Exemplos: 
      | usuario | senha    |
      | Admin   | admin123 |
      #| teste   | teste    |
