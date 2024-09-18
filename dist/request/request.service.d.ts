import { IAnalyzedResume } from 'src/common/types/resume.type';
import { PrismaService } from 'src/prisma.service';
export declare class RequestService {
    private prismaDb;
    constructor(prismaDb: PrismaService);
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
            requestId: number | null;
        }[];
    }>;
    deleteRequestById(idRequest: number): Promise<{
        id: number;
        createdAt: Date;
        title: string | null;
    }>;
    createRequests(resumes: IAnalyzedResume[], title?: string): Promise<{
        idRequest: number;
    }>;
}
