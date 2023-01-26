import { TareaService } from 'src/tarea/tarea.service';
export declare class WebController {
    private readonly tareaService;
    constructor(tareaService: TareaService);
    listar(res: any): Promise<any>;
    buscarPorId(res: any, id: string): Promise<any>;
}
