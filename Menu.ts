import { colors } from "./src/util/Colors";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import readlinesync = require("readline-sync");
import { ContaController } from "./src/controller/ContaController";
import { read } from "fs";

export function main() {
  let contas: ContaController = new ContaController();

  let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
  let titular: string;
  const tiposContas = ["Conta Corente", "Conta Poupança"];

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

    opcao = readlinesync.questionInt("Digite um número da lista \n");

    if (opcao == 9) {
      console.log(
        colors.fg.greenstrong,
        "Banco do Brazil com Z - Seu futuro começa aqui!"
      );
      sobre();
      console.log(colors.reset, "");
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

        console.log("Digite o número da Agência: ");
        agencia = readlinesync.questionInt("");

        console.log("Digite o nome do Titular da Conta: ");
        titular = readlinesync.question("");

        console.log("Digite o Saldo da conta (R$): ");
        saldo = readlinesync.questionFloat("");

        console.log("Escolha o tipo de conta:");
        console.log("1 - Conta Corrente");
        console.log("2 - Conta Poupança");
        tipo = readlinesync.questionInt("");

        switch (tipo) {
          case 1:
            console.log("Digite o Limite da conta (R$): ");
            limite = readlinesync.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                limite
              )
            );
            break;

          case 2:
            console.log("Digite o Dia do aniversário da Conta Poupança: ");
            aniversario = readlinesync.questionInt("");
            contas.cadastrar(
              new ContaPoupanca(
                contas.gerarNumero(),
                agencia,
                tipo,
                titular,
                saldo,
                aniversario
              )
            );
            break;

          default:
            console.log(
              colors.fg.redstrong,
              "Tipo de conta inválido!",
              colors.reset
            );
            break;
        }

        keyPress();
        break;

      case 2:
        console.log(
          colors.fg.whitestrong,
          "\n\nListar todas as Contas\n\n",
          colors.reset
        );
        contas.listarTodas();
        keyPress();
        break;

      case 3:
        console.log(
          colors.fg.whitestrong,
          "\n\nConsultar dados da Conta - por número\n\n",
          colors.reset
        );
        console.log("Digite o numero da Conta: ");
        numero = readlinesync.questionInt("");
        contas.procurarPorNumero(numero);
        keyPress();
        break;

      case 4:
        console.log(
          colors.fg.whitestrong,
          "\n\nAtualizar dados da Conta\n\n",
          colors.reset
        );

        console.log("Digite o numero da Conta: ");
        numero = readlinesync.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta != null) {
          console.log("Digite o numero da agencia: ");
          agencia = readlinesync.questionInt("");

          console.log("Digite o nome do Titular da conta: ");
          titular = readlinesync.question("");

          tipo = conta.tipo;

          console.log("Digite o saldo da Conta: ");
          saldo = readlinesync.questionFloat("");

          switch (tipo) {
            case 1:
              console.log("Digite o limite da Conta: ");
              limite = readlinesync.questionFloat("");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
              );
              break;

            case 2:
              console.log("Digite o dia de Aniversario da Conta Poupanca: ");
              aniversario = readlinesync.questionInt("");
              contas.atualizar(
                new ContaCorrente(
                  numero,
                  agencia,
                  tipo,
                  titular,
                  saldo,
                  aniversario
                )
              );
              break;
          }
        } else {
          console.log(
            colors.fg.red,
            `A conta numero: ${numero} não foi encontrada!`,
            colors.reset
          );
        }

        keyPress();
        break;

      case 5:
        console.log(
          colors.fg.whitestrong,
          "\n\nApagar uma Conta\n\n",
          colors.reset
        );
        console.log("Digite o numero da Conta: ");
        numero = readlinesync.questionInt("");
        contas.deletar(numero);
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
