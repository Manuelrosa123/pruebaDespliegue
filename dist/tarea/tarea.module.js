"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaModule = void 0;
const common_1 = require("@nestjs/common");
const tarea_controller_1 = require("./tarea.controller");
const tarea_service_1 = require("./tarea.service");
const mongoose_1 = require("@nestjs/mongoose");
const tarea_schema_1 = require("./schema/tarea.schema");
let TareaModule = class TareaModule {
};
TareaModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Tarea', schema: tarea_schema_1.TareaSchema }])],
        controllers: [tarea_controller_1.TareaController],
        providers: [tarea_service_1.TareaService],
        exports: [tarea_service_1.TareaService]
    })
], TareaModule);
exports.TareaModule = TareaModule;
//# sourceMappingURL=tarea.module.js.map