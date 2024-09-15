import { ConfigService } from '@nestjs/config';
export declare class HhruService {
    private readonly configService;
    constructor(configService: ConfigService);
    searchForUrl(url: string): Promise<any>;
}
