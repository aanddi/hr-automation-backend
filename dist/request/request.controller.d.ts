import { RequestService } from './request.service';
export declare class RequestController {
    private readonly requestService;
    constructor(requestService: RequestService);
    getAllRequests(): Promise<{
        items: {
            id: number;
            createdAt: Date;
            title: string | null;
        }[];
    }>;
    getRequestsById(idRequest: number): Promise<{
        idRequest: number;
        info: {
            createdAt: Date;
            title: string;
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
            comment: string | null;
            requestId: number | null;
        }[];
    }>;
    deleteRequestById(idRequest: number): Promise<{
        id: number;
        createdAt: Date;
        title: string | null;
    }>;
}
