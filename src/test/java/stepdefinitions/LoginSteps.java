package stepdefinitions;

import org.openqa.selenium.WebDriver;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.LoginPage;

public class LoginSteps {
	WebDriver driver;

	@Dado("^que o usuario esteja na pagina principal do sistema$")
	public void que_o_usuario_esteja_na_pagina_principal_do_sistema() throws Throwable {
		Hooks.abrirUrl("http://opensource-demo.orangehrmlive.com/");
		driver = Hooks.getDriver();
	}

	@Quando("^informar o campo Username como \"([^\"]*)\"$")
	public void informar_o_campo_Username_como(String arg1) throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.preencherUsuario(arg1);
	}

	@Quando("^informar o corpo Password  como \"([^\"]*)\"$")
	public void informar_o_corpo_Password_como(String arg1) throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.preencherSenha(arg1);
	}

	@Quando("^clicar no botao Login$")
	public void clicar_no_botao_Login() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.clicarBotaoLogin();
	}

	@Entao("^o sistema devera autorizar o login, exibindo pagina contendo e Dasboard\\.$")
	public void o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_e_Dasboard() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.validarDashboard();
	}
}
