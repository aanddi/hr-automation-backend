import { RequestService } from '@request/request.service';
import { HhruService } from 'src/hhru/hhru.service';
export declare class SearchService {
    private readonly hhruService;
    private readonly requestService;
    constructor(hhruService: HhruService, requestService: RequestService);
    getListResumes(params: string, accessToken: string): Promise<{
        found: any;
        pages: any;
        page: any;
        per_page: any;
        items: any;
    }>;
}
