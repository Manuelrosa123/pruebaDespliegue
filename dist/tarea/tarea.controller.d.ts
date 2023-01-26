import { TareaDto } from './dto/tarea-dto/tarea-dto';
import { TareaService } from './tarea.service';
export declare class TareaController {
    private readonly tareaService;
    constructor(tareaService: TareaService);
    listar(): Promise<import("./interfaces/tarea/tarea.interface").Tarea[]>;
    buscarPorId(id: string): Promise<{
        resultado: import("./interfaces/tarea/tarea.interface").Tarea;
        error?: undefined;
    } | {
        error: string;
        resultado?: undefined;
    }>;
    crear(crearTareaDto: TareaDto): Promise<import("./interfaces/tarea/tarea.interface").Tarea>;
    actualizar(id: string, actualizarTareaDto: TareaDto): Promise<import("./interfaces/tarea/tarea.interface").Tarea>;
    borrar(id: string): Promise<import("./interfaces/tarea/tarea.interface").Tarea>;
}
