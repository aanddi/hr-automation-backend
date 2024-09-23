import { Injectable } from '@nestjs/common';
import { RequestService } from '@request/request.service';

import { HhruService } from 'src/hhru/hhru.service';

@Injectable()
export class SearchService {
  constructor(
    private readonly hhruService: HhruService,
    private readonly requestService: RequestService,
  ) {}

  async getListResumes(params: string, accessToken: string) {
    const resumes = await this.hhruService.searchResume(params, accessToken);
    const { requests } = await this.requestService.getRequestsByUser();

    const newResumes = resumes.items.map((resume) => {
      const idHH = resume.id;

      const idRequest = requests.find((request) => {
        const requestResume = request?.resumes;
        return requestResume?.some((resumeRequest) => idHH === resumeRequest.idResumeHh);
      })?.id;

      return {
        ...resume,
        scoring: {
          idRequest,
        },
      };
    });

    return {
      found: resumes.found,
      pages: resumes.pages,
      page: resumes.page,
      per_page: resumes.per_page,
      items: newResumes,
    };
  }
}
