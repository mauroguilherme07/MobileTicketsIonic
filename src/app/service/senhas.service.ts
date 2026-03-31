import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  total = 0;
  prior = 0;
  geral = 0;
  exame = 0;

  ultimaSenha = '';

  gerarPrior() {
    this.prior++;
    this.total++;
    this.ultimaSenha = 'P' + this.prior.toString().padStart(3, '0');
  }

  gerarGeral() {
    this.geral++;
    this.total++;
    this.ultimaSenha = 'G' + this.geral.toString().padStart(3, '0');
  }

  gerarExame() {
    this.exame++;
    this.total++;
    this.ultimaSenha = 'E' + this.exame.toString().padStart(3, '0');
  }

  resetar() {
    this.total = 0;
    this.prior = 0;
    this.geral = 0;
    this.exame = 0;
    this.ultimaSenha = '';
  }

}