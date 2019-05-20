import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPageComponent } from './forms/start-page/start-page.component'
import { StatisticsComponent } from './forms/statistics/statistics.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: '/statistics', component: StatisticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
