import {Policy} from '../common/policy';
import {EventDetails} from './event-details';
import {Package} from '../package/package';

export interface EventData {
    details: EventDetails;
    packages: Package[];
    eligibleToJoin: boolean;
    policy: Policy[];
}