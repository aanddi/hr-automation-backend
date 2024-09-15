"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreballModule = void 0;
const common_1 = require("@nestjs/common");
const _prisma_service_1 = require("../prisma.service");
const scoreball_service_1 = require("./scoreball.service");
const gpt_service_1 = require("../gpt/gpt.service");
const request_service_1 = require("../request/request.service");
const scoreball_controller_1 = require("./scoreball.controller");
let ScoreballModule = class ScoreballModule {
};
exports.ScoreballModule = ScoreballModule;
exports.ScoreballModule = ScoreballModule = __decorate([
    (0, common_1.Module)({
        controllers: [scoreball_controller_1.ScoreballController],
        providers: [scoreball_service_1.ScoreballService, gpt_service_1.GptService, request_service_1.RequestService, _prisma_service_1.PrismaService],
    })
], ScoreballModule);
//# sourceMappingURL=scoreball.module.js.map