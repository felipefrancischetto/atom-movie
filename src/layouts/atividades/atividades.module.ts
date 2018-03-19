import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AtividadesPage } from './atividades';
import { ComponentsModule } from '../../components';
import { AtividadesPendentesComponent } from './components/atividades-pendentes/atividades-pendentes.component';
import { AtividadesExecucaoComponent } from './components/atividades-execucao/atividades-execucao.component';
import { ModalAtividadesComponent } from './components/modal-atividades/modal-atividades.component';

@NgModule({
  declarations: [
    AtividadesPage,
    AtividadesExecucaoComponent,
    AtividadesPendentesComponent,
    ModalAtividadesComponent,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AtividadesPage)
  ],
  entryComponents: [
    AtividadesPage,
    AtividadesExecucaoComponent,
    AtividadesPendentesComponent,
    ModalAtividadesComponent,
  ]
})

export class AtividadesModule{}
