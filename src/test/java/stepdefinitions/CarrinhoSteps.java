package stepdefinitions;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.CarrinhoPageObject;

public class CarrinhoSteps {
	
	WebDriver driver;
	
	@Quando("^o usuario clicar no botao carrinho$")
	public void o_usuario_clicar_no_botao_carrinho() throws Throwable {
		driver = Hooks.getDriver();
		CarrinhoPageObject cpo = new CarrinhoPageObject(driver);
		cpo.clicarNoBotaoCarrinho();
		assertTrue(cpo.verificarSeUsuarioEstaNaPaginaCorreta().equals("YOUR CART"));
	}
	
	@Quando("^o usuario clicar no botao checkout$")
	public void o_usuario_clicar_no_botao_checkout() throws Throwable {
		CarrinhoPageObject cpo = new CarrinhoPageObject(driver);
		cpo.clicarNoBotaoCheckout();
		assertTrue(cpo.verificarSeUsuarioEstaNaPaginaCorreta().equals("CHECKOUT: YOUR INFORMATION"));
	}

	@Quando("^o usuario preecher seus dados pessoais e clicar no botao continue \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void o_usuario_preecher_seus_dados_pessoais_e_clicar_no_botao_continue(String arg1, String arg2, String arg3) throws Throwable {
		CarrinhoPageObject cpo = new CarrinhoPageObject(driver);
		cpo.preencherCampoNome(arg1);
		cpo.preencherCampoSobrenome(arg2);
		cpo.PreencherCampoCep(arg3);
		
		cpo.clicarNoBotaoContinuar();
		assertTrue(cpo.verificarSeUsuarioEstaNaPaginaCorreta().equals("CHECKOUT: OVERVIEW"));
	}

	@Quando("^visulizar seu produto, seu valor, e sua taxa, e a quantidade de itens, e valorTotal \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void visulizar_seu_produto_seu_valor_e_sua_taxa_e_a_quantidade_de_itens_e_valorTotal(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
		CarrinhoPageObject cpo = new CarrinhoPageObject(driver);
		assertTrue(cpo.obterTexto_NomeProduto().equals(arg1));
		assertTrue(cpo.obterTexto_PrecoProduto().endsWith(arg2));
		assertTrue(cpo.obterTexto_TaxaProduto().endsWith(arg3));
		assertTrue(cpo.obterTexto_QuantidadeItens().endsWith(arg4));
		assertTrue(cpo.obterTexto_ValorTotal().endsWith(arg5));
	}

	@Quando("^o usuario clicar em finalizar$")
	public void o_usuario_clicar_em_finalizar() throws Throwable {
		CarrinhoPageObject cpo = new CarrinhoPageObject(driver);
		cpo.clicarNoBotaoFinalizar();
	}

	@Entao("^o sistema devera exibir mensagem de pedido efetuado \"([^\"]*)\"$")
	public void o_sistema_devera_exibir_mensagem_de_pedido_efetuado(String arg1) throws Throwable {
		CarrinhoPageObject cpo = new CarrinhoPageObject(driver);
		assertTrue(cpo.verificarSeUsuarioEstaNaPaginaCorreta().equals("CHECKOUT: COMPLETE!"));
		assertTrue(cpo.obterTexto_PedidoRealizadoComSucesso().equals(arg1));
	}

}
