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
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const request_service_1 = require("../request/request.service");
const hhru_service_1 = require("../hhru/hhru.service");
let SearchService = class SearchService {
    constructor(hhruService, requestService) {
        this.hhruService = hhruService;
        this.requestService = requestService;
    }
    async getListResumes(params, accessToken) {
        const resumes = await this.hhruService.searchResume(params, accessToken);
        const { requests } = await this.requestService.getRequestsByUser();
        const findRequestId = (resumeId) => {
            const request = requests.find((request) => request?.resumes?.some((resumeRequest) => resumeId === resumeRequest.idResumeHh));
            return request ? request.id : null;
        };
        const mapResumes = (resume) => {
            const idRequest = findRequestId(resume.id);
            return {
                ...resume,
                scoring: { idRequest },
            };
        };
        const newResumes = resumes.items.map(mapResumes);
        return {
            found: resumes.found,
            pages: resumes.pages,
            page: resumes.page,
            per_page: resumes.per_page,
            items: newResumes,
        };
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hhru_service_1.HhruService,
        request_service_1.RequestService])
], SearchService);
//# sourceMappingURL=search.service.js.map