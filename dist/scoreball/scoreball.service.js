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
let ScoreballService = class ScoreballService {
    constructor(gptService, configService, requestService) {
        this.gptService = gptService;
        this.configService = configService;
        this.requestService = requestService;
    }
    async createScoreball(dto) {
        const { resumes, urlHhRuApi, prompt } = dto;
        const idAssistant = this.configService.get('OPENAI_ASSISTANT_SCOREBALL_ID');
        if (!resumes || resumes.length === 0)
            throw new common_1.BadRequestException('Server: Список резюме не получен. => scoreballService.createScoreball');
        const analyzedList = [];
        const scoring = resumes.map(async (resume) => {
            const item = await this.gptService.Assistant(idAssistant, JSON.stringify(resume));
            analyzedList.push((0, extract_resume_utils_1.extractResume)(item));
        });
        await Promise.all(scoring);
        const createRequest = await this.requestService.createRequests(analyzedList, urlHhRuApi, prompt);
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
        request_service_1.RequestService])
], ScoreballService);
//# sourceMappingURL=scoreball.service.js.map