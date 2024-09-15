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
const config_1 = require("@nestjs/config");
const extract_url_utils_1 = require("../common/utils/extract-url.utils");
const hhru_service_1 = require("../hhru/hhru.service");
const gpt_service_1 = require("../gpt/gpt.service");
let SearchService = class SearchService {
    constructor(hhruService, gptService, configService) {
        this.hhruService = hhruService;
        this.gptService = gptService;
        this.configService = configService;
    }
    async getListCandidates(dto) {
        const idAssistant = this.configService.get('OPENAI_ASSISTANT_SEARCH_ID');
        const response = await this.gptService.Assistant(idAssistant, dto.description);
        const url = (0, extract_url_utils_1.extractUrl)(response);
        const listCandidates = await this.hhruService.searchForUrl(url);
        return {
            urlHHruApi: url,
            listCandidates: listCandidates,
        };
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hhru_service_1.HhruService,
        gpt_service_1.GptService,
        config_1.ConfigService])
], SearchService);
//# sourceMappingURL=search.service.js.map