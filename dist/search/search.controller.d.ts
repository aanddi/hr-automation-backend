import { SearchService } from './search.service';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    getListResumes(authorizationHeader: string, params: string): Promise<{
        found: any;
        pages: any;
        page: any;
        per_page: any;
        items: any;
    }>;
}
