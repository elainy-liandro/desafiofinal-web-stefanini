package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class AutenticacaoPageObject extends MetodosUteis{
	
	protected WebDriver driver;

	public AutenticacaoPageObject(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.CLASS_NAME, using = "login_logo")
	private WebElement logoTelaLogin;
	
	@FindBy(how = How.ID, using = "user-name")
	private WebElement campoUsername;
	
	@FindBy(how = How.ID, using = "password")
	private WebElement campoPassword;
	
	@FindBy(how = How.ID, using = "login-button")
	private WebElement botaoLogin;
	
	@FindBy(how = How.CLASS_NAME, using = "title")
	private WebElement tituloPaginaLogada_Products;
	
	@FindBy(how = How.XPATH, using = "//div[contains(@class, 'error-message-container error')]")
	private WebElement msgUsuarioBloqueado;
	
	public void verificarSeUsuarioEstaNaPaginaDeLogin() {
		esperarElemento(logoTelaLogin);
		logoTelaLogin.isDisplayed();
	}
	
	public void preencherCampoUsername(String username) {
		esperarElemento(campoUsername);
		campoUsername.sendKeys(username);
	}
	
	public void preencherCampoPassword(String password) {
		esperarElemento(campoPassword);
		campoPassword.sendKeys(password);
	}
	
	public void clicarNoBotaoLogin() {
		esperarElemento(botaoLogin);
		botaoLogin.click();
	}
	
	public void verificarSeUsuarioEstaNaPaginaLogada() {
		esperarElemento(tituloPaginaLogada_Products);
		tituloPaginaLogada_Products.isDisplayed();
	}
	
	public void verificarSeFoiExibidaMsgDeUsuarioBloqueado() {
		esperarElemento(msgUsuarioBloqueado);
		msgUsuarioBloqueado.isDisplayed();
	}

}
