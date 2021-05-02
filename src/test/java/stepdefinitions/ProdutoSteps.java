package stepdefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.ProdutoPageObject;

public class ProdutoSteps {

	WebDriver driver;

	@Quando("^o usuario selecionar um produto \"([^\"]*)\"$")
	public void o_usuario_selecionar_um_produto(String arg1) throws Throwable {
		driver = Hooks.getDriver();
		ProdutoPageObject ppo = new ProdutoPageObject(driver);
		assertEquals(ppo.obterTexto_NomeProduto(), arg1);
		ppo.clicarNoProdutoSelecionado();
	}

	@Quando("^visulizar seu valor e sua descricao \"([^\"]*)\" \"([^\"]*)\"$")
	public void visulizar_seu_valor_e_sua_descricao(String arg1, String arg2) throws Throwable {
		ProdutoPageObject ppo = new ProdutoPageObject(driver);
		assertTrue(ppo.obterTexto_PrecoProduto().endsWith(arg1));
		assertTrue(ppo.obterTexto_DescricaoProduto().endsWith(arg2));
	}

	@Quando("^o usuario clicar em adicionar ao carrinho$")
	public void o_usuario_clicar_em_adicionar_ao_carrinho() throws Throwable {
		ProdutoPageObject ppo = new ProdutoPageObject(driver);
		ppo.clicarNoBotaoAdicionarAoCarrinho();
	}

	@Entao("^o sistema devera exibir um item no carrinho$")
	public void o_sistema_devera_exibir_um_item_no_carrinho() throws Throwable {
		ProdutoPageObject ppo = new ProdutoPageObject(driver);
		assertEquals(ppo.obterValor_QuantidaDeItens(), "1");
	}

}
