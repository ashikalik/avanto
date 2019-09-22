import { Meta } from '../common/meta';
import { Invoice } from './invoice';
export interface InvoiceResponse {
    meta: Meta;
    data: Invoice[];
}