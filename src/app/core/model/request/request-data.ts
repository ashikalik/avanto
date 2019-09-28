import { EducationQualification} from '../cv/education-qualification';
import { Skill} from '../cv/skill';
import { Experience} from '../cv/experience';
import { Question} from './question';

export interface RequestData {
    request: Request;
    educational_qualification: EducationQualification[];
    skills: Skill[];
    experience: Experience[];
    question: Question[];
    rating: number
  }