package pageobjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {

	protected WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.ID, using = "txtUsername")
	private WebElement usuario;

	@FindBy(how = How.ID, using = "txtPassword")
	private WebElement senha;

	@FindBy(how = How.ID, using = "btnLogin")
	private WebElement btnLogin;

//	@FindBy(how = How.CSS, using = "h1:contains('Dashboard')")
	@FindBy(how = How.XPATH, using = "//*[@id=\"content\"]/div/div[1]/h1")
	private WebElement dashboard;

	public void esperarElemento(WebElement elemento) {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(elemento));
	}

	public void preencherUsuario(String nomeUsuario) {
		esperarElemento(usuario);
		usuario.sendKeys(nomeUsuario);
	}

	public void preencherSenha(String senhaUsuario) {
		esperarElemento(senha);
		senha.sendKeys(senhaUsuario);
	}

	public void clicarBotaoLogin() {
		esperarElemento(btnLogin);
		btnLogin.click();
	}

	public void validarDashboard() {
		esperarElemento(dashboard);
		assertTrue(dashboard.isEnabled());
	}

}
