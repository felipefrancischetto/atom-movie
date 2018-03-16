import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AtividadesPage } from './atividades';
import { ComponentsModule } from '../../components';
import { AtividadesPendentesComponent } from './components/atividades-pendentes/atividades-pendentes.component';
import { AtividadesExecucaoComponent } from './components/atividades-execucao/atividades-execucao.component';

@NgModule({
  declarations: [
    AtividadesPage,
    AtividadesExecucaoComponent,
    AtividadesPendentesComponent,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AtividadesPage)
  ],
  entryComponents: [
    AtividadesPage,
    AtividadesExecucaoComponent,
    AtividadesPendentesComponent,
  ]
})

export class AtividadesModule{}
