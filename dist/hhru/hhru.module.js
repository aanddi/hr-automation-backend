"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HhruModule = void 0;
const common_1 = require("@nestjs/common");
const hhru_service_1 = require("./hhru.service");
const hhru_controller_1 = require("./hhru.controller");
let HhruModule = class HhruModule {
};
exports.HhruModule = HhruModule;
exports.HhruModule = HhruModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [hhru_controller_1.HhruController],
        providers: [hhru_service_1.HhruService],
    })
], HhruModule);
//# sourceMappingURL=hhru.module.js.map