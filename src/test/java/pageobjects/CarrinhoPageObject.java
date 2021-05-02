package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class CarrinhoPageObject extends MetodosUteis {
	
	protected WebDriver driver;

	public CarrinhoPageObject(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.CLASS_NAME, using = "shopping_cart_link")
	private WebElement botaoCarrinho;
	
	@FindBy(how = How.ID, using = "checkout")
	private WebElement botaoCheckout;
	
	@FindBy(how = How.ID, using = "first-name")
	private WebElement nome;	

	@FindBy(how = How.ID, using = "last-name")
	private WebElement sobrenome;
	
	@FindBy(how = How.ID, using = "postal-code")
	private WebElement cep;

	@FindBy(how = How.ID, using = "continue")
	private WebElement botaoContinuar;
	
	@FindBy(how = How.XPATH, using = "//span[contains(@class, 'title')]")
	private WebElement tituloPagina;	

	@FindBy(how = How.CLASS_NAME, using = "inventory_item_name")
	private WebElement nomeProduto;
	
	@FindBy(how = How.CLASS_NAME, using = "summary_subtotal_label")
	private WebElement precoProduto;

	@FindBy(how = How.CLASS_NAME, using = "summary_tax_label")
	private WebElement valoTaxa;

	@FindBy(how = How.CLASS_NAME, using = "cart_quantity")
	private WebElement quantidadeItens;

	@FindBy(how = How.CLASS_NAME, using = "summary_total_label")
	private WebElement valorTotal;
	
	@FindBy(how = How.ID, using = "finish")
	private WebElement botaoFinalizar;

	@FindBy(how = How.CLASS_NAME, using = "complete-header")
	private WebElement textoPedidoRealizado;
	
	public void clicarNoBotaoCarrinho() {
		esperarElemento(botaoCarrinho);
		botaoCarrinho.click();
	}
	
	public void clicarNoBotaoCheckout() {
		esperarElemento(botaoCheckout);
		botaoCheckout.click();
	}
	
	public void clicarNoBotaoContinuar() {
		esperarElemento(botaoContinuar);
		botaoContinuar.click();
	}
	
	public void preencherCampoNome(String txtNome) {
		esperarElemento(nome);
		nome.sendKeys(txtNome);
	}
	
	public void preencherCampoSobrenome(String txtSobrenome) {
		esperarElemento(sobrenome);
		sobrenome.sendKeys(txtSobrenome);
	}
	
	public void PreencherCampoCep(String txtCep) {
		esperarElemento(cep);
		cep.sendKeys(txtCep);
	}
	
	public String verificarSeUsuarioEstaNaPaginaCorreta() {
		esperarElemento(tituloPagina);
		return tituloPagina.getText();
	}

	public String obterTexto_NomeProduto() {
		esperarElemento(nomeProduto);
		return nomeProduto.getText();
	}
	
	public String obterTexto_PrecoProduto() {
		esperarElemento(precoProduto);
		return precoProduto.getText();
	}

	public String obterTexto_TaxaProduto() {
		esperarElemento(valoTaxa);
		return valoTaxa.getText();
	}
	
	public String obterTexto_QuantidadeItens() {
		esperarElemento(quantidadeItens);
		return quantidadeItens.getText();
	}
	
	public String obterTexto_ValorTotal() {
		esperarElemento(valorTotal);
		return valorTotal.getText();
	}
	
	public void clicarNoBotaoFinalizar() {
		esperarElemento(botaoFinalizar);
		botaoFinalizar.click();
	}
	
	public String obterTexto_PedidoRealizadoComSucesso() {
		esperarElemento(textoPedidoRealizado);
		return textoPedidoRealizado.getText();
	}
	
	public Double removerCifraoValores(String valorComCifrao) {
		valorComCifrao.replace("$", "");
		return Double.parseDouble(valorComCifrao);
	}
	
	public Double calculoValorTotal(Double valor1, Double valor2, Integer quantidadeItens) {
		return (valor1 + valor2) * quantidadeItens;
	}

}
