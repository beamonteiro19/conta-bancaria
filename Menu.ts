import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

import readlinesync = require("readline-sync");

export function main() {
  let opcoes: number;

  // Objeto da Classe ContaCorrente (Teste)
  const contacorrente: ContaCorrente = new ContaCorrente(
    2,
    123,
    1,
    "Mariana",
    15000,
    1000
  );
  contacorrente.visualizar();
  contacorrente.sacar(2000);
  contacorrente.visualizar();
  contacorrente.depositar(1000);
  contacorrente.visualizar();

  // Objeto da Classe ContaPoupanca (teste)
  const contapoupanca: ContaPoupanca = new ContaPoupanca(
    3,
    123,
    2,
    "Victor",
    1000,
    10
  );
  contapoupanca.visualizar();
  contapoupanca.sacar(200);
  contapoupanca.visualizar();
  contapoupanca.depositar(1000);
  contapoupanca.visualizar();
  while (true) {
    console.log(
      colors.bg.black,
      colors.fg.yellow,

      `
    **************************************
            BANCO DO BRAZIL COM Z
    **************************************\n
    1 - Criar Conta
    2 - Listar todas as Contas
    3 - Buscar Conta por Numero
    4 - Atualizar Dados da Conta
    5 - Apagar Conta
    6 - Sacar
    7 - Depositar
    8 - Transferir valores entre Contas
    9 - Sair\n
    #####################################\n
    Entre com a opção desejada:\n
    `,
      colors.reset
    );

    opcoes = readlinesync.questionInt("Digite um número da lista \n");

    if (opcoes == 9) {
      console.log(
        colors.fg.greenstrong,
        "Banco do Brazil com Z - Seu futuro começa aqui!"
      );
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcoes) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );
        keyPress();
        break;

      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n",
          colors.reset
        );
        keyPress();
        break;
      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        );
        keyPress();
        break;

      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar uma Conta\n\n",
          colors.reset
        );
        keyPress();
        break;

      case 6:
        console.log(colors.fg.whitestrong, "\n\nSaque\n\n", colors.reset);
        keyPress();
        break;

      case 7:
        console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);
        keyPress();
        break;

      case 8:
        console.log(
          colors.fg.whitestrong,
          "\n\nTransferência entre Contas\n\n",
          colors.reset
        );
        keyPress();
        break;

      default:
        console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);
        keyPress();
        break;
    }
  }
}

export function sobre(): void {
  console.log(
    `
    *********************************************\n
    Projeto Desenvolvido por:  Beatriz Monteiro\n
    Generation Brasil - generation@generation.org\n
    https://github.com/beamonteiro19\n
    *********************************************
    `
  );
}

function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPressione Enter para continuar...\n");
  readlinesync.prompt();
}

main();
