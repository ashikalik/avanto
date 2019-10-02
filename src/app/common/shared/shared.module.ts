import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { DefaultImageBannerDirective } from './default-image-banner.directive';
import { TruncatePipe } from './truncate.pipe';



@NgModule({
  declarations: [ErrorMessageComponent, DefaultImageBannerDirective,DefaultImageBannerDirective, TruncatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMessageComponent,
    DefaultImageBannerDirective,
    TruncatePipe
  ]
})
export class SharedModule { }
