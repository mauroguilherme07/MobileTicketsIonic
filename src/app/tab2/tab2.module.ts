import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

// Importando pipe e diretiva standalone
import { NomePipe } from '../pipes/nome.pipe';
import { DestaqueDirective } from '../directives/destaque.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    NomePipe,           // ✅ Pipe standalone
    DestaqueDirective   // ✅ Diretiva standalone
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
