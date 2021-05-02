package stepdefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.AutenticacaoPageObject;

public class AutenticacaoSteps {
	
	WebDriver driver;

	@Dado("^que o usuario esteja na pagina de autenticacao$")
	public void que_o_usuario_esteja_na_pagina_de_autenticacao() throws Throwable {
		driver = Hooks.getDriver();
		AutenticacaoPageObject apo = new AutenticacaoPageObject(driver);
	    apo.verificarSeUsuarioEstaNaPaginaDeLogin();
	}

	@Quando("^informar o campo Username como \"([^\"]*)\"$")
	public void informar_o_campo_Username_como(String arg1) throws Throwable {
		AutenticacaoPageObject apo = new AutenticacaoPageObject(driver);
		apo.preencherCampoUsername(arg1);
	}

	@Quando("^informar o campo Password como \"([^\"]*)\"$")
	public void informar_o_campo_Password_como(String arg1) throws Throwable {
		AutenticacaoPageObject apo = new AutenticacaoPageObject(driver);
		apo.preencherCampoPassword(arg1);
	}

	@Quando("^clicar no botao Login$")
	public void clicar_no_botao_Login() throws Throwable {
		AutenticacaoPageObject apo = new AutenticacaoPageObject(driver);
		apo.clicarNoBotaoLogin();
	}

	@Entao("^o sistema devera autorizar a autenticacao exibindo pagina logada")
	public void o_sistema_devera_autorizar_a_autenticacao_exibindo_pagina_logada() throws Throwable {
		AutenticacaoPageObject apo = new AutenticacaoPageObject(driver);
		apo.verificarSeUsuarioEstaNaPaginaLogada();
	}
	
	//////////////////////////////
	
	@Entao("^o sistema devera apresentar mensagem de usuario bloquado$")
	public void o_sistema_devera_apresentar_mensagem_de_usuario_bloquado() throws Throwable {
		AutenticacaoPageObject apo = new AutenticacaoPageObject(driver);
		apo.verificarSeFoiExibidaMsgDeUsuarioBloqueado();
	}

}
