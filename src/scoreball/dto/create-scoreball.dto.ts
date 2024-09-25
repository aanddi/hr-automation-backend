import { IStructureResume } from '@common/types/resume.type';

export class CreateScoreballDto {
  resumes: IStructureResume[];
  title: string;
  isDeepScoring: boolean;
}
