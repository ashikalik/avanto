import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BuyTicketPageComponent } from './buy-ticket-page/buy-ticket-page.component';

const routes: Routes = [
  {
    path: ":id",
    component: BuyTicketPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyTicketRoutingModule {}
