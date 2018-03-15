import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { SideMenuComponent } from './sidemenu/sidemenu.component';
import { TabFooterComponent } from './tab-footer/tab-footer.component';
import { FabButtonComponent } from './fab-button/fab-button.component';

@NgModule({
  imports:[
    IonicPageModule
  ],
  declarations: [
    NavbarComponent,
    SideMenuComponent,
    TabFooterComponent,
    FabButtonComponent,
  ],
  exports: [
    NavbarComponent,
    SideMenuComponent,
    TabFooterComponent,
    FabButtonComponent,
  ]
})
export class ComponentsModule{}
