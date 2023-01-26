import { Controller, Get, Param, Put, Body, Delete, Post } from '@nestjs/common';
import { TareaDto } from './dto/tarea-dto/tarea-dto';
import { TareaService } from './tarea.service';

@Controller('tarea')
export class TareaController {
    constructor(private readonly tareaService: TareaService){}
    // GET /tarea
    @Get()
    async listar() {
        return this.tareaService.listar();
    }

    // GET /tarea/buscar/:id
    @Get('buscar/:id')
    async buscarPorId(@Param('id') id: string) {
        try {
            let resultado = await this.tareaService.buscarPorId(id);
            if (resultado) return {resultado: resultado};
            throw new Error();
        } catch(Error) {
            return { error: 'Error buscando al tarea' };
        }
    }

    // POST /tarea
    @Post()
    async crear(@Body() crearTareaDto: TareaDto) {
        return this.tareaService.insertar(crearTareaDto);
    }
    
    // PUT /tarea/:id
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() actualizarTareaDto: TareaDto) {
        return this.tareaService.actualizar(id, actualizarTareaDto);
    }

    // DELETE /tarea/:id
    @Delete(':id')
    borrar(@Param('id') id: string) {
        return this.tareaService.borrar(id);
    }       
}
