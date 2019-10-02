import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./modules/home/home.module#HomeModule"
  },
  {
    path: "search",
    loadChildren: "./modules/search/search.module#SearchModule"
  },
  {
    path: "about-us",
    loadChildren: "./modules/about-us/about-us.module#AboutUsModule"
  },
  {
    path: "contact-us",
    loadChildren: "./modules/contact-us/contact-us.module#ContactUsModule"
  },
  {
    path: "event",
    loadChildren: "./modules/event/event.module#EventModule"
  },
  {
    path: "buy-ticket",
    loadChildren: "./modules/buy-ticket/buy-ticket.module#BuyTicketModule"
  },
  {
    path: "register",
    loadChildren: "./modules/register/register.module#RegisterModule"
  },
  {
    path: "login",
    loadChildren: "./modules/login/login.module#LoginModule"
  },
  {
    path: "profile",
    loadChildren: "./modules/profile/profile.module#ProfileModule"
  },
  {
    path: "organization",
    loadChildren: "./modules/organization/organization.module#OrganizationModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
