import { NgModule } from '@angular/core';

import { AtividadesModule } from './atividades/atividades.module';
import { ConcluidosModule } from './concluidos/concluidos.module';
import { ReembolsosModule } from './reembolsos/reembolsos.module';
import { PerfilModule } from './perfil/perfil.module';
import { SuporteModule } from './suporte/suporte.module';

@NgModule({
  imports:[
    AtividadesModule,
    ConcluidosModule,
    ReembolsosModule,
    PerfilModule,
    SuporteModule
  ]
})

export class PagesModule{}

