import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectPackageComponent } from './select-package/select-package.component';
import { EventFormComponent } from './event-form/event-form.component';
import { CreateEventPageComponent } from './create-event-page/create-event-page.component';

const routes: Routes = [

    {
        path: '',
        component: CreateEventPageComponent,
        children: [
            {
                path: '',
                redirectTo: 'select-package',
                pathMatch: 'full'
            },
            {
                path: 'select-package',
                component: SelectPackageComponent,
            },
            {
                path: 'event-details',
                component: EventFormComponent,
            }
        ]

    },
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateEventRoutingModule { }
