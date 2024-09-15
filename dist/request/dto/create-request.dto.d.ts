import { IAnalyzedResume } from 'src/common/types/resume.type';
export declare class CreateRequestDto {
    resumes: IAnalyzedResume[];
    urlHh: string;
    prompt: string;
}
