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
  "duration": 5203764401,
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
  "duration": 499981800,
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
  "duration": 307622201,
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
  "duration": 281060600,
  "status": "passed"
});
formatter.match({
  "location": "AutenticacaoSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 377331000,
  "status": "passed"
});
formatter.match({
  "location": "AutenticacaoSteps.o_sistema_devera_autorizar_a_autenticacao_exibindo_pagina_logada()"
});
formatter.result({
  "duration": 153509699,
  "status": "passed"
});
formatter.after({
  "duration": 945664299,
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
  "duration": 3716045000,
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
  "duration": 184403200,
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
  "duration": 227093300,
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
  "duration": 219694101,
  "status": "passed"
});
formatter.match({
  "location": "AutenticacaoSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 206428200,
  "status": "passed"
});
formatter.match({
  "location": "AutenticacaoSteps.o_sistema_devera_apresentar_mensagem_de_usuario_bloquado()"
});
formatter.result({
  "duration": 168038900,
  "status": "passed"
});
formatter.after({
  "duration": 839545700,
  "status": "passed"
});
});