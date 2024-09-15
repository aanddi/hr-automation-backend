import { IAnalyzedResume } from 'src/common/types/resume.type';

export class CreateRequestDto {
  resumes: IAnalyzedResume[];
  urlHh: string;
  prompt: string;
}
