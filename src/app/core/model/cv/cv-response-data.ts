import { Cv } from './cv';
import { EducationQualification } from './education-qualification';
import { Skill } from './skill';
import { Experience } from './experience';

export interface CvResponseData {
    cv: Cv;
    education?: EducationQualification[];
    skill?: Skill[];
    experience?: Experience[];
}