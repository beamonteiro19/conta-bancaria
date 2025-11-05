// import {Colors} from './src/util/Colors'

// const input = require('readline-sync');


let opcoes: number
do{ 

console.log(
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
    9 -  Sair\n
    #####################################\n
    Entre com a opção desejada:\n
    `
)

opcoes = input.questionInt("Digite um número da lista")


// switch(opcoes){
//     case 1: 
//     break;


//     case 2: 
//     break;

// }

}while(opcoes !== 9)