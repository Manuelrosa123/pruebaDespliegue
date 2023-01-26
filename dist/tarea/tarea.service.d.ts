import { Tarea } from './interfaces/tarea/tarea.interface';
import { Model } from 'mongoose';
import { TareaDto } from './dto/tarea-dto/tarea-dto';
export declare class TareaService {
    private readonly tareaModel;
    constructor(tareaModel: Model<Tarea>);
    listar(): Promise<Tarea[]>;
    buscarPorId(id: string): Promise<Tarea>;
    insertar(crearTareaDto: TareaDto): Promise<Tarea>;
    borrar(id: string): Promise<Tarea>;
    actualizar(id: string, actualizarTareaDto: TareaDto): Promise<Tarea>;
}
