import { Meta } from './meta';
import { Error } from './error';

export interface ServerError {
    meta: Meta;
    errors: Error[];
    user?: boolean;
}