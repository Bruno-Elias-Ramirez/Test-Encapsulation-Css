import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DhDashboardComponent} from "./dh-dashboard.component";
import {DhHeroesComponent} from "./components/heroes/dh-heroes.component";

const routes: Routes = [
  {
    path: '',
    component: DhDashboardComponent,
    children: [
      {
        path: '',
        component: DhHeroesComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DhDashboardRoutingModule {
}
