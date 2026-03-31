import { Component } from '@angular/core';
import { SenhasService } from '../service/senhas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(public senhas: SenhasService) {}

  gerarPrior() {
    this.senhas.gerarPrior();
  }

  gerarGeral() {
    this.senhas.gerarGeral();
  }

  gerarExame() {
    this.senhas.gerarExame();
  }

  resetar() {
    this.senhas.resetar();
  }

}