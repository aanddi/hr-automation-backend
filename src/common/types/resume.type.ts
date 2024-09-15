import { mockResume } from '../mock/resume.mock';

// такую структуру отдает нам gpt после скоринга
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
  url: string;
  scoreball: number;
}

// структура резюме, которую отдает hh (см. в mock пример резюме)
type IStructureResume = typeof mockResume;

export type { IAnalyzedResume, IStructureResume };
