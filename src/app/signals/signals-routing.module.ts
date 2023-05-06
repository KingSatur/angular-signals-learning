import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { PropertiesComponent } from './pages/properties/properties.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      { path: 'counter', component: CounterPageComponent },
      { path: 'user-info', component: UserInfoComponent },
      { path: 'properties', component: PropertiesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalsRoutingModule {}
