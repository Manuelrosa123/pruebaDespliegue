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
exports.TareaController = void 0;
const common_1 = require("@nestjs/common");
const tarea_dto_1 = require("./dto/tarea-dto/tarea-dto");
const tarea_service_1 = require("./tarea.service");
let TareaController = class TareaController {
    constructor(tareaService) {
        this.tareaService = tareaService;
    }
    async listar() {
        return this.tareaService.listar();
    }
    async buscarPorId(id) {
        try {
            let resultado = await this.tareaService.buscarPorId(id);
            if (resultado)
                return { resultado: resultado };
            throw new Error();
        }
        catch (Error) {
            return { error: 'Error buscando al tarea' };
        }
    }
    async crear(crearTareaDto) {
        return this.tareaService.insertar(crearTareaDto);
    }
    actualizar(id, actualizarTareaDto) {
        return this.tareaService.actualizar(id, actualizarTareaDto);
    }
    borrar(id) {
        return this.tareaService.borrar(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TareaController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)('buscar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TareaController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tarea_dto_1.TareaDto]),
    __metadata("design:returntype", Promise)
], TareaController.prototype, "crear", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tarea_dto_1.TareaDto]),
    __metadata("design:returntype", void 0)
], TareaController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TareaController.prototype, "borrar", null);
TareaController = __decorate([
    (0, common_1.Controller)('tarea'),
    __metadata("design:paramtypes", [tarea_service_1.TareaService])
], TareaController);
exports.TareaController = TareaController;
//# sourceMappingURL=tarea.controller.js.map