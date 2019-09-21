import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { TranslationModule } from 'src/app/common/translation/translation.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/common/shared/shared.module';

@NgModule({
  declarations: [ProfilePageComponent, PersonalInfoComponent, UpdatePasswordComponent, MyTicketsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslationModule
  ]
})
export class ProfileModule { }
