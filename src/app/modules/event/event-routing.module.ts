import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventDetailsPageComponent } from './event-details-page/event-details-page.component';

const routes: Routes = [
  {
    path: ":id",
    component: EventDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {}
