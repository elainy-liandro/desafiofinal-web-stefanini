package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class ProdutoPageObject extends MetodosUteis {

	protected WebDriver driver;

	public ProdutoPageObject(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.ID, using = "item_4_title_link")
	private WebElement nomeProduto;
	
	@FindBy(how = How.XPATH, using = "//div[contains(@class, 'inventory_details_price')]")
	private WebElement precoProduto;

	@FindBy(how = How.XPATH, using = "//div[contains(@class, 'inventory_details_desc large_size')]")
	private WebElement descricaoProduto;

	@FindBy(how = How.ID, using = "add-to-cart-sauce-labs-backpack")
	private WebElement botaoAdicionarCarrinho;

	@FindBy(how = How.XPATH, using = "//span[contains(@class, 'shopping_cart_badge')]")
	private WebElement quantidadeDeItensCarrinho;

	public void verificarSeUsuarioEstaNaPaginaDeLogin() {
		esperarElemento(nomeProduto);
		nomeProduto.isDisplayed();
	}

	public String obterTexto_NomeProduto() {
		esperarElemento(nomeProduto);
		return nomeProduto.getText();
	}

	public void clicarNoProdutoSelecionado() {
		esperarElemento(nomeProduto);
		nomeProduto.click();
	}
	
	public String obterTexto_PrecoProduto() {
		esperarElemento(precoProduto);
		return precoProduto.getText();
	}

	public String obterTexto_DescricaoProduto() {
		esperarElemento(descricaoProduto);
		return descricaoProduto.getText();
	}

	public void clicarNoBotaoAdicionarAoCarrinho() {
		esperarElemento(botaoAdicionarCarrinho);
		botaoAdicionarCarrinho.click();
	}

	public String obterValor_QuantidaDeItens() {
		esperarElemento(quantidadeDeItensCarrinho);
		return quantidadeDeItensCarrinho.getText();
	}

}
