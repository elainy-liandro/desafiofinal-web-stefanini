$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Atenticacao.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Author: Elainy Rodrigues"
    },
    {
      "line": 3,
      "value": "#Data 02/05/2021"
    }
  ],
  "line": 5,
  "name": "Autenticacao",
  "description": "",
  "id": "autenticacao",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    },
    {
      "line": 4,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Realizar autenticacao com Sucesso",
  "description": "",
  "id": "autenticacao;realizar-autenticacao-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 10,
      "name": "@Autenticacao"
    },
    {
      "line": 10,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "informar o campo Username como \"\u003cusername\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "informar o campo Password como \"\u003cpassword\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o sistema devera autorizar a autenticacao exibindo pagina logada",
  "keyword": "Entao "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "autenticacao;realizar-autenticacao-com-sucesso;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 18,
      "id": "autenticacao;realizar-autenticacao-com-sucesso;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 19,
      "id": "autenticacao;realizar-autenticacao-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 3481189200,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que o usuario esteja na pagina de autenticacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "AutenticacaoSteps.que_o_usuario_esteja_na_pagina_de_autenticacao()"
});
formatter.result({
  "duration": 179560900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Realizar autenticacao com Sucesso",
  "description": "",
  "id": "autenticacao;realizar-autenticacao-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    },
    {
      "line": 4,
      "name": "@End2End"
    },
    {
      "line": 10,
      "name": "@SmokeTest"
    },
    {
      "line": 10,
      "name": "@Autenticacao"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "informar o campo Username como \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "informar o campo Password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o sistema devera autorizar a autenticacao exibindo pagina logada",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 32
    }
  ],
  "location": "AutenticacaoSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 103819800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "AutenticacaoSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 130551900,
  "status": "passed"
});
formatter.match({
  "location": "AutenticacaoSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 134626300,
  "status": "passed"
});
formatter.match({
  "location": "AutenticacaoSteps.o_sistema_devera_autorizar_a_autenticacao_exibindo_pagina_logada()"
});
formatter.result({
  "duration": 75243500,
  "status": "passed"
});
formatter.after({
  "duration": 669128000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Realizar autenticacao sem Sucesso",
  "description": "",
  "id": "autenticacao;realizar-autenticacao-sem-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@AutenticacaoUsuarioBloquado"
    },
    {
      "line": 21,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "informar o campo Username como \"\u003cusername\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "informar o campo Password como \"\u003cpassword\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "o sistema devera apresentar mensagem de usuario bloquado",
  "keyword": "Entao "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "autenticacao;realizar-autenticacao-sem-sucesso;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "autenticacao;realizar-autenticacao-sem-sucesso;;1"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ],
      "line": 30,
      "id": "autenticacao;realizar-autenticacao-sem-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2743161500,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que o usuario esteja na pagina de autenticacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "AutenticacaoSteps.que_o_usuario_esteja_na_pagina_de_autenticacao()"
});
formatter.result({
  "duration": 65330900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Realizar autenticacao sem Sucesso",
  "description": "",
  "id": "autenticacao;realizar-autenticacao-sem-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    },
    {
      "line": 4,
      "name": "@End2End"
    },
    {
      "line": 21,
      "name": "@SmokeTest"
    },
    {
      "line": 21,
      "name": "@AutenticacaoUsuarioBloquado"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "informar o campo Username como \"locked_out_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "informar o campo Password como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "o sistema devera apresentar mensagem de usuario bloquado",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 32
    }
  ],
  "location": "AutenticacaoSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 123263100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 32
    }
  ],
  "location": "AutenticacaoSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 104287700,
  "status": "passed"
});
formatter.match({
  "location": "AutenticacaoSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 93883300,
  "status": "passed"
});
formatter.match({
  "location": "AutenticacaoSteps.o_sistema_devera_apresentar_mensagem_de_usuario_bloquado()"
});
formatter.result({
  "duration": 60210000,
  "status": "passed"
});
formatter.after({
  "duration": 654697300,
  "status": "passed"
});
formatter.uri("Features/Carrinho.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Author: Elainy Rodrigues"
    },
    {
      "line": 3,
      "value": "#Data 02/05/2021"
    }
  ],
  "line": 5,
  "name": "Carrinho",
  "description": "",
  "id": "carrinho",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@Carrinho"
    },
    {
      "line": 4,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Finalizar compra",
  "description": "",
  "id": "carrinho;finalizar-compra",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 12,
      "name": "@FinalizarCompra"
    },
    {
      "line": 12,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "o usuario clicar no botao carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o usuario clicar no botao checkout",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o usuario preecher seus dados pessoais e clicar no botao continue \"\u003cnome\u003e\" \"\u003csobrenome\u003e\" \"\u003ccep\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "visulizar seu produto, seu valor, e sua taxa, e a quantidade de itens, e valorTotal \"\u003cnomeProduto\u003e\" \"\u003cvalorProduto\u003e\" \"\u003cvalorTaxa\u003e\" \"\u003cquantidadeItens\u003e\" \"\u003cvalorTotal\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o usuario clicar em finalizar",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o sistema devera exibir mensagem de pedido efetuado \"\u003cmsgPedidoRealizado\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "carrinho;finalizar-compra;",
  "rows": [
    {
      "cells": [
        "nome",
        "sobrenome",
        "cep",
        "nomeProduto",
        "valorProduto",
        "valorTaxa",
        "quantidadeItens",
        "valorTotal",
        "msgPedidoRealizado"
      ],
      "line": 22,
      "id": "carrinho;finalizar-compra;;1"
    },
    {
      "cells": [
        "Jonh",
        "Travolta",
        "00000000",
        "Sauce Labs Backpack",
        "$29.99",
        "$2.40",
        "1",
        "$32.39",
        "THANK YOU FOR YOUR ORDER"
      ],
      "line": 23,
      "id": "carrinho;finalizar-compra;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 3317943500,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que o usuario esteja na pagina pagina logada",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "o sistema devera autorizar a autenticacao exibindo pagina logada",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "o sistema devera exibir um item incluido no carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "AutenticacaoSteps.que_o_usuario_esteja_na_pagina_pagina_logada()"
});
formatter.result({
  "duration": 491296500,
  "status": "passed"
});
formatter.match({
  "location": "AutenticacaoSteps.o_sistema_devera_autorizar_a_autenticacao_exibindo_pagina_logada()"
});
formatter.result({
  "duration": 77289500,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.o_sistema_devera_exibir_um_item_incluido_no_carrinho()"
});
formatter.result({
  "duration": 174741400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Finalizar compra",
  "description": "",
  "id": "carrinho;finalizar-compra;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@End2End"
    },
    {
      "line": 12,
      "name": "@FinalizarCompra"
    },
    {
      "line": 12,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "o usuario clicar no botao carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o usuario clicar no botao checkout",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o usuario preecher seus dados pessoais e clicar no botao continue \"Jonh\" \"Travolta\" \"00000000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "visulizar seu produto, seu valor, e sua taxa, e a quantidade de itens, e valorTotal \"Sauce Labs Backpack\" \"$29.99\" \"$2.40\" \"1\" \"$32.39\"",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o usuario clicar em finalizar",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o sistema devera exibir mensagem de pedido efetuado \"THANK YOU FOR YOUR ORDER\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "CarrinhoSteps.o_usuario_clicar_no_botao_carrinho()"
});
formatter.result({
  "duration": 173826400,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_usuario_clicar_no_botao_checkout()"
});
formatter.result({
  "duration": 157609600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jonh",
      "offset": 67
    },
    {
      "val": "Travolta",
      "offset": 74
    },
    {
      "val": "00000000",
      "offset": 85
    }
  ],
  "location": "CarrinhoSteps.o_usuario_preecher_seus_dados_pessoais_e_clicar_no_botao_continue(String,String,String)"
});
formatter.result({
  "duration": 526075000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 85
    },
    {
      "val": "$29.99",
      "offset": 107
    },
    {
      "val": "$2.40",
      "offset": 116
    },
    {
      "val": "1",
      "offset": 124
    },
    {
      "val": "$32.39",
      "offset": 128
    }
  ],
  "location": "CarrinhoSteps.visulizar_seu_produto_seu_valor_e_sua_taxa_e_a_quantidade_de_itens_e_valorTotal(String,String,String,String,String)"
});
formatter.result({
  "duration": 312724000,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_usuario_clicar_em_finalizar()"
});
formatter.result({
  "duration": 97665300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 53
    }
  ],
  "location": "CarrinhoSteps.o_sistema_devera_exibir_mensagem_de_pedido_efetuado(String)"
});
formatter.result({
  "duration": 115679600,
  "status": "passed"
});
formatter.after({
  "duration": 650114000,
  "status": "passed"
});
formatter.uri("Features/Produto.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Author: Elainy Rodrigues"
    },
    {
      "line": 3,
      "value": "#Data 02/05/2021"
    }
  ],
  "line": 5,
  "name": "Produto",
  "description": "",
  "id": "produto",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@Produto"
    },
    {
      "line": 4,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Adicionar produto ao carrinho",
  "description": "",
  "id": "produto;adicionar-produto-ao-carrinho",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@AdicionarProduto"
    },
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "o usuario selecionar um produto \"\u003cnomeProduto\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visulizar seu valor e sua descricao \"\u003cvalorProduto\u003e\" \"\u003cdescricaoProduto\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o usuario clicar em adicionar ao carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o sistema devera exibir um item no carrinho",
  "keyword": "Entao "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "produto;adicionar-produto-ao-carrinho;",
  "rows": [
    {
      "cells": [
        "nomeProduto",
        "valorProduto",
        "descricaoProduto"
      ],
      "line": 19,
      "id": "produto;adicionar-produto-ao-carrinho;;1"
    },
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99",
        "streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
      ],
      "line": 20,
      "id": "produto;adicionar-produto-ao-carrinho;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 3086978500,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que o usuario esteja na pagina pagina logada",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "o sistema devera autorizar a autenticacao exibindo pagina logada",
  "keyword": "Quando "
});
formatter.match({
  "location": "AutenticacaoSteps.que_o_usuario_esteja_na_pagina_pagina_logada()"
});
formatter.result({
  "duration": 602739800,
  "status": "passed"
});
formatter.match({
  "location": "AutenticacaoSteps.o_sistema_devera_autorizar_a_autenticacao_exibindo_pagina_logada()"
});
formatter.result({
  "duration": 61403000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Adicionar produto ao carrinho",
  "description": "",
  "id": "produto;adicionar-produto-ao-carrinho;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@End2End"
    },
    {
      "line": 11,
      "name": "@AdicionarProduto"
    },
    {
      "line": 4,
      "name": "@Produto"
    },
    {
      "line": 11,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "o usuario selecionar um produto \"Sauce Labs Backpack\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "visulizar seu valor e sua descricao \"$29.99\" \"streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o usuario clicar em adicionar ao carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o sistema devera exibir um item no carrinho",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack",
      "offset": 33
    }
  ],
  "location": "ProdutoSteps.o_usuario_selecionar_um_produto(String)"
});
formatter.result({
  "duration": 148116900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$29.99",
      "offset": 37
    },
    {
      "val": "streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
      "offset": 46
    }
  ],
  "location": "ProdutoSteps.visulizar_seu_valor_e_sua_descricao(String,String)"
});
formatter.result({
  "duration": 114956600,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.o_usuario_clicar_em_adicionar_ao_carrinho()"
});
formatter.result({
  "duration": 94793300,
  "status": "passed"
});
formatter.match({
  "location": "ProdutoSteps.o_sistema_devera_exibir_um_item_no_carrinho()"
});
formatter.result({
  "duration": 61709000,
  "status": "passed"
});
formatter.after({
  "duration": 691345700,
  "status": "passed"
});
});