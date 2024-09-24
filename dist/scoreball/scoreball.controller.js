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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreballController = void 0;
const common_1 = require("@nestjs/common");
const scoreball_service_1 = require("./scoreball.service");
const create_scoreball_dto_1 = require("./dto/create-scoreball.dto");
let ScoreballController = class ScoreballController {
    constructor(scoreballService) {
        this.scoreballService = scoreballService;
    }
    async createScoreball(dto, authorizationHeader) {
        const accessToken = authorizationHeader?.split(' ')[1] || '';
        return this.scoreballService.createScoreball(dto, accessToken);
    }
};
exports.ScoreballController = ScoreballController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_scoreball_dto_1.CreateScoreballDto, String]),
    __metadata("design:returntype", Promise)
], ScoreballController.prototype, "createScoreball", null);
exports.ScoreballController = ScoreballController = __decorate([
    (0, common_1.Controller)('scoreball'),
    __metadata("design:paramtypes", [scoreball_service_1.ScoreballService])
], ScoreballController);
//# sourceMappingURL=scoreball.controller.js.map