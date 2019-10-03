import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationPageComponent } from './events/organization-page/organization-page.component';
import { OrganizationEventsComponent } from './events/organization-events/organization-events.component';
import { CreateEventPageComponent } from './create-event/create-event-page/create-event-page.component';

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
          {
            path: "create-event",
            loadChildren: "./create-event/create-event.module#CreateEventModule"
          },
        //   {
        //       path: 'create-event',
        //       component: CreateEventPageComponent,
        //       //canActivate: [ OrganizationGuard],
              
        //   },
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
