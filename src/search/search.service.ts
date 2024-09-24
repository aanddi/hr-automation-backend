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

    const findRequestId = (resumeId) => {
      const request = requests.find((request) =>
        request?.resumes?.some((resumeRequest) => resumeId === resumeRequest.idResumeHh),
      );
      return request ? request.id : null;
    };

    const mapResumes = (resume) => {
      const idRequest = findRequestId(resume.id);
      return {
        ...resume,
        scoring: { idRequest },
      };
    };

    const newResumes = resumes.items.map(mapResumes);

    return {
      found: resumes.found,
      pages: resumes.pages,
      page: resumes.page,
      per_page: resumes.per_page,
      items: newResumes,
    };
  }
}
