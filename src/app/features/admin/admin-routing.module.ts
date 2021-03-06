import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ReportsComponent } from './components/reports/reports.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  {
    path : "",
    component : DashboardComponent,
    children : [
      {
        path : "home",
        component : HomeComponent
      },
      {
        path : "summary",
        component : SummaryComponent
      },
      {
        path : "",
        redirectTo : "home",
        pathMatch : "full"
      },
      {
        path : "buildings",
        component : BuildingsComponent
      },
      {
        path : "reports",
        component : ReportsComponent
      },
      {
        path : "settings",
        component : SettingsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
