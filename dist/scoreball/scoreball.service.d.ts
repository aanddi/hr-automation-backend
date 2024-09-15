import { CreateScoreballDto } from './dto/create-scoreball.dto';
import { GptService } from 'src/gpt/gpt.service';
import { ConfigService } from '@nestjs/config';
import { RequestService } from 'src/request/request.service';
export declare class ScoreballService {
    private readonly gptService;
    private readonly configService;
    private readonly requestService;
    constructor(gptService: GptService, configService: ConfigService, requestService: RequestService);
    createScoreball(dto: CreateScoreballDto): Promise<{
        idRequest: number;
    }>;
}
