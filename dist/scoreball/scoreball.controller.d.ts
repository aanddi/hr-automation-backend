import { ScoreballService } from './scoreball.service';
import { CreateScoreballDto } from './dto/create-scoreball.dto';
export declare class ScoreballController {
    private readonly scoreballService;
    constructor(scoreballService: ScoreballService);
    createScoreball(dto: CreateScoreballDto): Promise<{
        idRequest: number;
    }>;
}
