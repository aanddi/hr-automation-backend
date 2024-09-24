import { ConfigService } from '@nestjs/config';
export declare class HhruService {
    private readonly configService;
    constructor(configService: ConfigService);
    searchResume(params: string, accessToken: string): Promise<any>;
    getResumeById(id: string, accessToken: string): Promise<import("axios").AxiosResponse<any, any>>;
}
