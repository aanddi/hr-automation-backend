import { mockResume } from '../mock/resume.mock';
interface IAnalyzedResume {
    id: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    age: number;
    title: string;
    total_experience: {
        months: number;
    };
    alternate_url: string;
    scoreball: number;
    comment: string;
}
type IStructureResume = typeof mockResume;
export type { IAnalyzedResume, IStructureResume };
