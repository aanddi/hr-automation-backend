import { Injectable } from '@nestjs/common';
import { SearchDto } from './dto/search.dto';

import { ConfigService } from '@nestjs/config';
import { extractUrl } from 'src/common/utils/extract-url.utils';
import { HhruService } from 'src/hhru/hhru.service';
import { GptService } from 'src/gpt/gpt.service';

@Injectable()
export class SearchService {
  constructor(
    private readonly hhruService: HhruService,
    private readonly gptService: GptService,
    private readonly configService: ConfigService,
  ) {}

  async getListCandidates(dto: SearchDto) {
    const idAssistant = this.configService.get('OPENAI_ASSISTANT_SEARCH_ID');

    const response = await this.gptService.Assistant(idAssistant, dto.description);

    const url = extractUrl(response);

    const listCandidates = await this.hhruService.searchForUrl(url);

    return {
      urlHHruApi: url,
      listCandidates: listCandidates,
    };
  }
}
