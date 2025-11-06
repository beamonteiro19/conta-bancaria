export class Conta {
  private _numero: number;
  private _agencia: number;
  private _tipo: number;
  private _titular: string;
  private _saldo: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number
  ) {
    this._numero = numero;
    this._agencia = agencia;
    this._tipo = tipo;
    this._titular = titular;
    this._saldo = saldo;
  }

  public set numero(novoValor: number) {
    this._numero = novoValor;
  }

  public get numero() {
    return this._numero;
  }

  public set agencia(agencia: number) {
    this._agencia = agencia;
  }

  public get agencia() {
    return this._agencia;
  }

  public set tipo(tipo: number) {
    this._tipo = tipo;
  }

  public get tipo() {
    return this._tipo;
  }

  public set titular(titular: string) {
    this._titular = titular;
  }

  public get titular() {
    return this._titular;
  }

  public set saldo(saldo: number) {
    this._saldo = saldo;
  }

  public get saldo() {
    return this._saldo;
  }

  public sacar(valor: number): boolean {
    if (this._saldo < valor) {
      console.log("\nSaldo Insuficiente!");
      return false;
    }

    this._saldo = this._saldo - valor;
    return true;
  }

  public depositar(valor: number): void {
    this._saldo = this._saldo + valor;
  }

  public visualizar(): void {
    let tipo: string = "";

    switch (this._tipo) {
      case 1:
        tipo = "Conta corrente";
        break;
      case 2:
        tipo = "Conta poupança";
        break;
    }

    console.log(`
        ******************************************************************
        \nDados da conta: \n
        ******************************************************************
        \nNumero da conta: ${this._numero} \n
        \nAgencia: ${this._agencia} \n
        \Tipo da conta: ${this.tipo} \n
        \nNumero da conta: ${this._numero} \n
        \nSaldo: ${this._saldo.toFixed(2)} \n
        `)


  }
}
