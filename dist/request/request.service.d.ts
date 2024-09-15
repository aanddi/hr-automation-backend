import { IAnalyzedResume } from 'src/common/types/resume.type';
import { PrismaService } from 'src/prisma.service';
export declare class RequestService {
    private prismaDb;
    constructor(prismaDb: PrismaService);
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
    deleteRequestById(idRequest: number): Promise<{
        id: number;
        createdAt: Date;
        urlHh: string | null;
        prompt: string | null;
    }>;
    createRequests(resumes: IAnalyzedResume[], urlHhRuApi: string, prompt: string): Promise<{
        idRequest: number;
    }>;
}
