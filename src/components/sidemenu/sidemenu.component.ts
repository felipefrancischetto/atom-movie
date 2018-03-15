import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { AtividadesPage } from '../../layouts/atividades/atividades';
import { ConcluidosPage } from '../../layouts/concluidos/concluidos';
import { PerfilPage } from '../../layouts/perfil/perfil';
import { ReembolsosPage } from '../../layouts/reembolsos/reembolsos';
import { SuportePage } from '../../layouts/suporte/suporte';

@Component({
  selector: 'sidemenu',
  templateUrl: 'sidemenu.html'
})
export class SideMenuComponent {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = AtividadesPage;
  pages: Array<{title: string, component: any}>;

  constructor() {
    this.pages = [
      { title: 'Serviços', component: AtividadesPage },
      { title: 'Serviços Concluídos', component: ConcluidosPage },
      { title: 'Perfil', component: PerfilPage },
      { title: 'Reembolsos', component: ReembolsosPage },
      { title: 'Suporte', component: SuportePage }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
