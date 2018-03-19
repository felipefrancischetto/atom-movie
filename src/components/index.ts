import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { SideMenuComponent } from './sidemenu/sidemenu.component';
import { TabFooterComponent } from './tab-footer/tab-footer.component';

@NgModule({
  imports:[
    IonicPageModule
  ],
  declarations: [
    NavbarComponent,
    SideMenuComponent,
    TabFooterComponent,
  ],
  exports: [
    NavbarComponent,
    SideMenuComponent,
    TabFooterComponent,
  ]
})
export class ComponentsModule{}
