import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AtividadesPage } from './atividades';
import { ComponentsModule } from '../../components';
import { FormAbastecerComponent } from './components/form-abastecer/form-abastecer.component';
import { FormAlmocarComponent } from './components/form-almocar/form-almocar.component';
import { AtividadesPendentesComponent } from './components/atividades-pendentes/atividades-pendentes.component';
import { AtividadesExecucaoComponent } from './components/atividades-execucao/atividades-execucao.component';
import { FormOutrosComponent } from './components/form-outros/form-outros.component';
import { FormVoltarEmpresaComponent } from './components/form-voltar-empresa/form-voltar-empresa.component';

@NgModule({
  declarations: [
    AtividadesPage,
    AtividadesExecucaoComponent,
    AtividadesPendentesComponent,
    FormAlmocarComponent,
    FormAbastecerComponent,
    FormVoltarEmpresaComponent,
    FormOutrosComponent
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AtividadesPage)
  ],
  entryComponents: [
    AtividadesPage,
    AtividadesExecucaoComponent,
    AtividadesPendentesComponent,
    FormAlmocarComponent,
    FormAbastecerComponent,
    FormVoltarEmpresaComponent,
    FormOutrosComponent
  ]
})

export class AtividadesModule{}
