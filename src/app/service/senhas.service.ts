import { Injectable } from '@angular/core';
import { Senha } from '../models/senha';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  total = 0;
  prior = 0;
  geral = 0;
  exame = 0;
  
  atendidas= 0;

  filaSP: Senha[] = [];
  filaSG: Senha[] = [];
  filaSE: Senha[] = [];

  ultimaSenha = '';

  senhaAtual = '';

  ultimasChamadas: Senha[]
= [];

  historicoAtendimentos:
  Senha[] = [];

  constructor() { }

  gerarPrior() {

    this.prior++;
    this.total++;

    const hoje = new Date();

    const ano = hoje.getFullYear().toString().slice(-2);

    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');

    const dia = hoje.getDate().toString().padStart(2, '0');

    const numero = `${ano}${mes}${dia}-SP${this.prior.toString().padStart(2, '0')}`;

    const novaSenha: Senha = {
      numero: numero,
      tipo: 'SP',
      dataEmissao: new Date(),
      atendida: false
    };

    this.filaSP.push(novaSenha);

    this.ultimaSenha = numero;

    console.log(this.filaSP);
  }

  gerarGeral() {

    this.geral++;
    this.total++;

    const hoje = new Date();

    const ano = hoje.getFullYear().toString().slice(-2);

    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');

    const dia = hoje.getDate().toString().padStart(2, '0');
  
    const numero = `${ano}${mes}${dia}-SG${this.geral.toString().padStart(2, '0')}`;

    const novaSenha: Senha = {
      numero: numero,
      tipo: 'SG',
      dataEmissao: new Date(),
      atendida: false
    };

    this.filaSG.push(novaSenha);

    this.ultimaSenha = numero;

    console.log(this.filaSG);
  }

  gerarExame() {

    this.exame++;
    this.total++;

    const hoje = new Date();

    const ano = hoje.getFullYear().toString().slice(-2);

    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');

    const dia = hoje.getDate().toString().padStart(2, '0');
    
    const numero = `${ano}${mes}${dia}-SE${this.exame.toString().padStart(2, '0')}`;

    const novaSenha: Senha = {
      numero: numero,
      tipo: 'SE',
      dataEmissao: new Date(),
      atendida: false
    };

    this.filaSE.push(novaSenha);

    this.ultimaSenha = numero;

    console.log(this.filaSE);
  }

  chamarProximaSenha() {

  let senha: Senha | undefined;

  // Primeiro tenta chamar SP
  if (this.filaSP.length > 0) {

    senha = this.filaSP.shift();

  }

  // Depois SE
  else if (this.filaSE.length > 0) {

    senha = this.filaSE.shift();

  }

  // Depois SG
  else if (this.filaSG.length > 0) {

    senha = this.filaSG.shift();

  }

  if (senha) {

    this.atendidas++;

    senha.atendida = true;

    senha.dataAtendimento = new Date();

    senha.guiche = 1;

    this.senhaAtual = senha.numero;

    this.ultimasChamadas.unshift(senha);

    this.historicoAtendimentos.unshift(senha);

    if (this.ultimasChamadas.length > 5) {

      this.ultimasChamadas.pop();

    }

    console.log(this.ultimasChamadas);

  }

}
  resetar() {

    this.total = 0;

    this.prior = 0;
    this.geral = 0;
    this.exame = 0;

    this.filaSP = [];
    this.filaSG = [];
    this.filaSE = [];

    this.ultimaSenha = '';
    this.senhaAtual = '';
    this.ultimasChamadas =
[];
  }

}