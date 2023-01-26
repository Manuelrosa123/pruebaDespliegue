import { Controller, Get, Res, Param } from '@nestjs/common';
import { TareaService } from 'src/tarea/tarea.service';

@Controller('web')
export class WebController {
    constructor(private readonly tareaService: TareaService){}
    @Get('tareas')
    async listar(@Res() res) {
        const resultado = await this.tareaService.listar();
        console.log(resultado);
        return res.render('tareas_listado', {tareas: resultado});
    }

    // GET /web/tareas/id
    @Get('tareas/:id')
    async buscarPorId(@Res() res, @Param('id') id: string) {
        const resultado = await this.tareaService.buscarPorId(id);
        return res.render('tareas_ficha', {tarea: resultado});
    }
}
