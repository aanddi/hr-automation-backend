import { SearchDto } from './dto/search.dto';
import { ConfigService } from '@nestjs/config';
import { HhruService } from 'src/hhru/hhru.service';
import { GptService } from 'src/gpt/gpt.service';
export declare class SearchService {
    private readonly hhruService;
    private readonly gptService;
    private readonly configService;
    constructor(hhruService: HhruService, gptService: GptService, configService: ConfigService);
    getListCandidates(dto: SearchDto): Promise<{
        urlHHruApi: string;
        listCandidates: any;
    }>;
}
