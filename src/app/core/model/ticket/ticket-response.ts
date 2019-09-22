import { Meta } from '../common/meta';
import { Ticket } from './ticket';

export interface TicketResponse {
    meta: Meta;
    data: Ticket[];
}