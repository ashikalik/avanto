import {Meta} from '../common/meta';
import {EventData} from './event-data';

export interface EventDetailsResponse {
    meta: Meta;
    data: EventData;
}