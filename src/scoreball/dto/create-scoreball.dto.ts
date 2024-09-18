import { IStructureResume } from 'src/common/types/resume.type';

export class CreateScoreballDto {
  resumes: IStructureResume[];
  title: string;
}
