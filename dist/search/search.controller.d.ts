import { SearchService } from './search.service';
import { SearchDto } from './dto/search.dto';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    getList(): Promise<string>;
    getListCandidates(dto: SearchDto): Promise<{
        urlHHruApi: string;
        listCandidates: any;
    }>;
}
