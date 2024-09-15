import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
export declare class RequestController {
    private readonly requestService;
    constructor(requestService: RequestService);
    getAllRequests(): Promise<{
        items: {
            id: number;
            createdAt: Date;
        }[];
    }>;
    getRequestsById(idRequest: number): Promise<{
        idRequest: number;
        info: {
            createdAt: Date;
            urlHh: string;
            prompt: string;
        };
        resumes: {
            id: number;
            idResumeHh: string | null;
            urlResume: string | null;
            firstName: string | null;
            lastName: string | null;
            middleName: string | null;
            age: number | null;
            title: string | null;
            totalExperience: number | null;
            scoreball: number | null;
            requestId: number | null;
        }[];
    }>;
    createRequest(dto: CreateRequestDto): Promise<{
        idRequest: number;
    }>;
    deleteRequestById(idRequest: number): Promise<{
        id: number;
        createdAt: Date;
        urlHh: string | null;
        prompt: string | null;
    }>;
}
