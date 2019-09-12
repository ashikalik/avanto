import {Query} from './query';
import {Filters} from './filters';

export interface Meta {
    query: Query;
    filters: Filters;
    message: string;
    code: number;
}