"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const gpt_module_1 = require("./gpt/gpt.module");
const config_1 = require("@nestjs/config");
const hhru_module_1 = require("./hhru/hhru.module");
const search_module_1 = require("./search/search.module");
const scoreball_module_1 = require("./scoreball/scoreball.module");
const request_module_1 = require("./request/request.module");
const prisma_service_1 = require("./prisma.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            gpt_module_1.GptModule,
            hhru_module_1.HhruModule,
            search_module_1.SearchModule,
            scoreball_module_1.ScoreballModule,
            request_module_1.RequestModule,
        ],
        providers: [prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map