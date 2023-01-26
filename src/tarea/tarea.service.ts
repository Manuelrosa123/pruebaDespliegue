import { Injectable } from '@nestjs/common';
import { Tarea } from './interfaces/tarea/tarea.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TareaDto } from './dto/tarea-dto/tarea-dto';

@Injectable()
export class TareaService {

    constructor(@InjectModel('Tarea') private readonly tareaModel: Model<Tarea>) { }

    async listar(): Promise<Tarea[]> {
        return await this.tareaModel.find().exec();
    }

    async buscarPorId(id: string): Promise<Tarea> {
        return await this.tareaModel.findById(id).exec();
    }

    async insertar(crearTareaDto: TareaDto): Promise<Tarea> {
        const nuevaTarea = new this.tareaModel(crearTareaDto);
        return await nuevaTarea.save();
    }
    async borrar(id: string): Promise<Tarea> {
        return await this.tareaModel.findByIdAndRemove(id).exec();
    }

    async actualizar(id: string, actualizarTareaDto: TareaDto): Promise<Tarea> {
        return await this.tareaModel.findByIdAndUpdate(id,
            {
                $set: {
                    nombre: actualizarTareaDto.nombre,
                    prioridad: actualizarTareaDto.prioridad,
                    fecha: actualizarTareaDto.fecha
                }
            }, { new: true, runValidators: true }).exec();
    }
}