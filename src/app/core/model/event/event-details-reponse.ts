import {Meta} from '../common/meta';
import {Policy} from '../common/policy';
import {EventDetails} from './event-details';
import {Package} from '../package/package';

export interface EventDetailsResponseData {
    details: EventDetails;
    packages: Package[];
    eligibleToJoin: boolean;
    policy: Policy[];
}

export interface EventDetailsResponse {
    meta: Meta;
    data: EventDetailsResponseData;
}