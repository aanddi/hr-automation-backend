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
exports.ScoreballService = void 0;
const common_1 = require("@nestjs/common");
const gpt_service_1 = require("../gpt/gpt.service");
const config_1 = require("@nestjs/config");
const extract_resume_utils_1 = require("../common/utils/extract-resume.utils");
const request_service_1 = require("../request/request.service");
const hhru_service_1 = require("../hhru/hhru.service");
let ScoreballService = class ScoreballService {
    constructor(gptService, configService, requestService, hhruService) {
        this.gptService = gptService;
        this.configService = configService;
        this.requestService = requestService;
        this.hhruService = hhruService;
    }
    async createScoreball(dto, accessToken) {
        const { resumes, title, isDeepScoring } = dto;
        const idAssistant = this.configService.get('OPENAI_ASSISTANT_SCOREBALL_ID');
        if (!resumes || resumes.length === 0)
            throw new common_1.BadRequestException('Server: Список резюме не получен. => scoreballService.createScoreball');
        const analyzedList = [];
        const scoring = resumes.map(async (resume) => {
            let resumeType;
            if (isDeepScoring) {
                const fullresume = await this.hhruService.getResumeById(resume.id, accessToken);
                resumeType = fullresume.data;
            }
            else
                resumeType = resume;
            const itemResult = await this.gptService.Assistant(idAssistant, JSON.stringify(resumeType));
            analyzedList.push((0, extract_resume_utils_1.extractResume)(itemResult));
        });
        await Promise.all(scoring);
        const createRequest = await this.requestService.createRequests(analyzedList, title, isDeepScoring);
        return {
            idRequest: createRequest.idRequest,
        };
    }
};
exports.ScoreballService = ScoreballService;
exports.ScoreballService = ScoreballService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [gpt_service_1.GptService,
        config_1.ConfigService,
        request_service_1.RequestService,
        hhru_service_1.HhruService])
], ScoreballService);
//# sourceMappingURL=scoreball.service.js.map