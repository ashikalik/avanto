import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ActivateAccountRoutingModule } from 'src/app/modules/activate-account/activate-account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { TranslationModule } from 'src/app/common/translation/translation.module';



@NgModule({
  declarations: [ActivateAccountComponent],
  imports: [
    CommonModule,
    ActivateAccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslationModule
  ]
})
export class ActivateAccountModule { }
