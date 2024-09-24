import { CreateScoreballDto } from './dto/create-scoreball.dto';
import { GptService } from 'src/gpt/gpt.service';
import { ConfigService } from '@nestjs/config';
import { RequestService } from 'src/request/request.service';
import { HhruService } from '@hhru/hhru.service';
export declare class ScoreballService {
    private readonly gptService;
    private readonly configService;
    private readonly requestService;
    private readonly hhruService;
    constructor(gptService: GptService, configService: ConfigService, requestService: RequestService, hhruService: HhruService);
    createScoreball(dto: CreateScoreballDto, accessToken: string): Promise<{
        idRequest: number;
    }>;
}
