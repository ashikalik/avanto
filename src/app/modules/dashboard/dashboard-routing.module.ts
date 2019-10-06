import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StatisticsPageComponent } from './report/statistics/statistics-page/statistics-page.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventSettingsComponent } from './event/event-settings/event-settings.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'statistics',
        pathMatch: 'full'
      },
      {
        path: 'event-details',
        component: EventDetailsComponent
        //canActivate: [ OrganizationGuard],

      },
      {
        path: 'event-settings',
        component: EventSettingsComponent
        //canActivate: [ OrganizationGuard],

      },
      {
        path: 'statistics',
        component: StatisticsPageComponent
        //canActivate: [ OrganizationGuard],

      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashboardRoutingModule { }
