import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { RegisterMemberComponent } from "./register-member/register-member.component";
import { RegisterOrganizerComponent } from "./register-organizer/register-organizer.component";
import { RegisterOrganizationComponent } from "./register-organization/register-organization.component";

const routes: Routes = [
  {
    path: "",
    component: RegisterPageComponent
  },
  {
    path: "member",
    component: RegisterMemberComponent,
    pathMatch: "prefix",
  },
  {
    path: "organizer",
    component: RegisterOrganizerComponent,
    pathMatch: "prefix",
  },
  {
    path: "organization",
    component: RegisterOrganizationComponent,
    pathMatch: "prefix",
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}
