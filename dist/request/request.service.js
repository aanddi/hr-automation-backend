"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let RequestService = class RequestService {
    constructor(prismaDb) {
        this.prismaDb = prismaDb;
    }
    async getAllRequests() {
        const requests = await this.prismaDb.request.findMany({
            orderBy: {
                id: 'desc',
            },
        });
        return {
            items: requests,
        };
    }
    async getRequestsById(idRequest) {
        const request = await this.prismaDb.request.findUnique({
            where: {
                id: +idRequest,
            },
            select: {
                id: true,
                createdAt: true,
                title: true,
                resumes: true,
            },
        });
        return {
            idRequest: request.id,
            info: {
                createdAt: request?.createdAt,
                title: request?.title,
            },
            resumes: request?.resumes,
        };
    }
    async deleteRequestById(idRequest) {
        return await this.prismaDb.request.delete({
            where: {
                id: +idRequest,
            },
        });
    }
    async createRequests(resumes, title) {
        if (!resumes || resumes.length === 0)
            throw new common_1.NotFoundException('Server: Резюме не найдены при сохранении в базу данных. Попробуйте повторить анализ. => createRequests');
        try {
            const newRequest = await this.prismaDb.request.create({
                data: {
                    title: title ?? null,
                },
            });
            const saveResumes = resumes.map(async (resume) => {
                await this.prismaDb.resumes.create({
                    data: {
                        idResumeHh: resume.id,
                        firstName: resume.first_name,
                        lastName: resume.last_name,
                        middleName: resume.middle_name,
                        age: resume.age,
                        title: resume.title,
                        totalExperience: resume?.total_experience?.months || null,
                        urlResume: resume.alternate_url,
                        scoreball: resume.scoreball,
                        comment: resume.comment,
                        requestId: newRequest.id,
                    },
                });
            });
            await Promise.all(saveResumes);
            return {
                idRequest: newRequest.id,
            };
        }
        catch (e) {
            console.log(e);
            throw new common_1.BadRequestException('Server: При сохранении резюме произошла ошибка. => createRequests');
        }
    }
};
exports.RequestService = RequestService;
exports.RequestService = RequestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RequestService);
//# sourceMappingURL=request.service.js.map