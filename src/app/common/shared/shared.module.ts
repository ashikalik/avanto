import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { DefaultImageBannerDirective } from './default-image-banner.directive';
import { TruncatePipe } from './truncate.pipe';
import { EventBannerComponent } from './event-banner/event-banner.component';
import { EventListItemComponent } from './event-list-item/event-list-item.component';
import { SearchEventFormComponent } from './search-event-form/search-event-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventMapComponent } from './event-map/event-map.component';
import { AgmCoreModule } from '@agm/core';
import { OrganizationEventSettingsComponent } from './organization-event-settings/organization-event-settings.component';



@NgModule({
  declarations: [
    ErrorMessageComponent,
    DefaultImageBannerDirective,
    DefaultImageBannerDirective,
    TruncatePipe,
    EventBannerComponent,
    EventListItemComponent,
    SearchEventFormComponent,
    EventMapComponent,
    OrganizationEventSettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AgmCoreModule
  ],
  exports: [
    ErrorMessageComponent,
    EventBannerComponent,
    EventListItemComponent,
    SearchEventFormComponent,
    EventMapComponent,
    OrganizationEventSettingsComponent,
    DefaultImageBannerDirective,
    TruncatePipe
  ]
})
export class SharedModule { }
