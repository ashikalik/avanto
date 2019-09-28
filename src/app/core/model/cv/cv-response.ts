import { Meta } from '../common/meta';
import { CvResponseData } from './cv-response-data';

export interface CvResponse {
    meta: Meta;
    data: CvResponseData;
}