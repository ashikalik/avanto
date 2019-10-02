import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationPageComponent } from './organization-page/organization-page.component';
import { OrganizationEventsComponent } from './organization-events/organization-events.component';

const routes:  Routes = [
  {
      path: '',
      component: OrganizationPageComponent,
      children: [
          {
              path: '',
              redirectTo: 'events',
              pathMatch: 'full'
          },
          {
              path: 'events',
              component: OrganizationEventsComponent,
              //canActivate: [ OrganizationGuard],
              
          },
          // {
          //     path: 'create-event',
          //     component: AddEventComponent,
          //     canActivate: [ OrganizationGuard],
              
          // },
          // {
          //     path: 'event/:event-key',
          //     loadChildren: './dashboard/dashboard.module#DashboardModule',
          //     canActivate: [ OrganizationSupervisorGuard],
              
          // }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
