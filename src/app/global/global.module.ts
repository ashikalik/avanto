import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TranslationModule } from '../shared/translation/translation.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslationModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class GlobalModule { }
