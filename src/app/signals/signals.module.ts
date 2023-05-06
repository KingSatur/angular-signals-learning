import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoComponent,
    PropertiesComponent,
    SideMenuComponent,
  ],
  imports: [CommonModule, SignalsRoutingModule],
})
export class SignalsModule {}
