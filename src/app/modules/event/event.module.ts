import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgmCoreModule } from "@agm/core";

import { EventRoutingModule } from "./event-routing.module";
import { EventDetailsPageComponent } from "./event-details-page/event-details-page.component";
import { BasicDetailsComponent } from "./basic-details/basic-details.component";
import { StartsInCounterComponent } from "./starts-in-counter/starts-in-counter.component";
import { TicketListItemComponent } from "./ticket-list-item/ticket-list-item.component";
import { EventRulesComponent } from "./event-rules/event-rules.component";
import { EventDescriptionComponent } from "./event-description/event-description.component";
import { EventDateTimeComponent } from "./event-date-time/event-date-time.component";
import { EventSponsorsComponent } from "./event-sponsors/event-sponsors.component";
import { EventBannerComponent } from "./event-banner/event-banner.component";
import { EventMapComponent } from "./event-map/event-map.component";
import { SharedModule } from "../../common/shared/shared.module";
import { EventDisplayHelperService } from "./event-display-helper.service";

@NgModule({
  declarations: [
    EventDetailsPageComponent,
    BasicDetailsComponent,
    StartsInCounterComponent,
    TicketListItemComponent,
    EventRulesComponent,
    EventDescriptionComponent,
    EventDateTimeComponent,
    EventSponsorsComponent,
    EventBannerComponent,
    EventMapComponent
  ],
  imports: [CommonModule, AgmCoreModule, EventRoutingModule, SharedModule],
  providers: [EventDisplayHelperService]
})
export class EventModule {}
