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
exports.HhruService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
let HhruService = class HhruService {
    constructor(configService) {
        this.configService = configService;
    }
    async searchResume(params, accessToken) {
        try {
            const listCandidates = await axios_1.default.get(`https://api.hh.ru/resumes?${params}`, {
                params: {
                    per_page: 5,
                    with_job_search_status: true,
                },
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            return listCandidates.data;
        }
        catch (error) {
            console.log(`Server: Ошибка при взаимодействии с hh.ru api. Метод => hhruService.searchResume`, error);
            throw new common_1.BadRequestException(`Server: Ошибка при взаимодействии с hh.ru api. Метод => hhruService.searchResume. ${error}`);
        }
    }
    async getResumeById(id, accessToken) {
        if (!id)
            throw new common_1.BadRequestException(`Server: Ошибка при взаимодействии с hh.ru api. Id резюме не найдено. Метод => hhruService.getResumeById`);
        try {
            const resume = await axios_1.default.get(`https://api.hh.ru/resumes/${id}`, {
                params: {
                    per_page: 5,
                },
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            return resume;
        }
        catch (error) {
            console.log(`Server: Ошибка при взаимодействии с hh.ru api. Метод => hhruService.getResumeById`, error);
            throw new common_1.BadRequestException(`Server: Ошибка при взаимодействии с hh.ru api. Метод => hhruService.getResumeById. ${error}`);
        }
    }
};
exports.HhruService = HhruService;
exports.HhruService = HhruService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], HhruService);
//# sourceMappingURL=hhru.service.js.map