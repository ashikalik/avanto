import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { DefaultImageBannerDirective } from './default-image-banner.directive';



@NgModule({
  declarations: [ErrorMessageComponent, DefaultImageBannerDirective,DefaultImageBannerDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMessageComponent,
    DefaultImageBannerDirective
  ]
})
export class SharedModule { }
