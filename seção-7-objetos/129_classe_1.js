class Lancamento {
  constructor(nome = "Genérico", valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lacamentos = [];
  }

  addLancamentos(...Lancamentos) {
    Lancamentos.forEach((l) => this.lacamentos.push(l));
  }

  sumario() {
    let valorConsolidado = 0;
    this.lacamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

const salario = new Lancamento("Salario", 45000);
const contaDeLuz = new Lancamento("Luz", -220);
const contaDeAgua = new Lancamento("Agua", -130);
const contaDeInternet = new Lancamento("Internet", -80);

const contas = new CicloFinanceiro(7, 2025);
contas.addLancamentos(salario, contaDeLuz, contaDeAgua, contaDeInternet);

console.log(contas.sumario());
