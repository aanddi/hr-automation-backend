import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateScoreballDto } from './dto/create-scoreball.dto';
import { GptService } from 'src/gpt/gpt.service';
import { ConfigService } from '@nestjs/config';

import { extractResume } from '../common/utils/extract-resume.utils';
import { RequestService } from 'src/request/request.service';
import { IAnalyzedResume } from 'src/common/types/resume.type';
import { HhruService } from '@hhru/hhru.service';

@Injectable()
export class ScoreballService {
  constructor(
    private readonly gptService: GptService,
    private readonly configService: ConfigService,
    private readonly requestService: RequestService,
    private readonly hhruService: HhruService,
  ) {}

  async createScoreball(dto: CreateScoreballDto, accessToken: string) {
    const { resumes, title } = dto;

    const idAssistant = this.configService.get('OPENAI_ASSISTANT_SCOREBALL_ID');

    if (!resumes || resumes.length === 0)
      throw new BadRequestException(
        'Server: Список резюме не получен. => scoreballService.createScoreball',
      );

    const analyzedList: IAnalyzedResume[] = [];

    const scoring = resumes.map(async (resume) => {
      const fullResume = await this.hhruService.getResumeById(resume.id, accessToken);
      const itemResult = await this.gptService.Assistant(
        idAssistant,
        JSON.stringify(fullResume.data),
      );
      analyzedList.push(extractResume(itemResult));
    });

    await Promise.all(scoring);

    console.log(analyzedList);

    const createRequest = await this.requestService.createRequests(analyzedList, title);

    return {
      idRequest: createRequest.idRequest,
    };
  }
}
