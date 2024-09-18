import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateScoreballDto } from './dto/create-scoreball.dto';
import { GptService } from 'src/gpt/gpt.service';
import { ConfigService } from '@nestjs/config';

import { extractResume } from '../common/utils/extract-resume.utils';
import { RequestService } from 'src/request/request.service';
import { IAnalyzedResume } from 'src/common/types/resume.type';

@Injectable()
export class ScoreballService {
  constructor(
    private readonly gptService: GptService,
    private readonly configService: ConfigService,
    private readonly requestService: RequestService,
  ) {}

  async createScoreball(dto: CreateScoreballDto) {
    const { resumes, title } = dto;

    const idAssistant = this.configService.get('OPENAI_ASSISTANT_SCOREBALL_ID');

    if (!resumes || resumes.length === 0)
      throw new BadRequestException(
        'Server: Список резюме не получен. => scoreballService.createScoreball',
      );

    const analyzedList: IAnalyzedResume[] = [];

    const scoring = resumes.map(async (resume) => {
      const item = await this.gptService.Assistant(idAssistant, JSON.stringify(resume));
      analyzedList.push(extractResume(item));
    });

    await Promise.all(scoring);

    const createRequest = await this.requestService.createRequests(analyzedList, title);

    return {
      idRequest: createRequest.idRequest,
    };
  }
}
