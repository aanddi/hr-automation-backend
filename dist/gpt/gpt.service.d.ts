import { ConfigService } from '@nestjs/config';
export declare class GptService {
    private readonly configService;
    private readonly openai;
    constructor(configService: ConfigService);
    Assistant(idAssistant: string, desc: string): Promise<string>;
}
