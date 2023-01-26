import { Module } from '@nestjs/common';
import { WebController } from './web.controller';
import { TareaModule } from 'src/tarea/tarea.module';

@Module({
    imports: [TareaModule],
    controllers: [WebController]
})
export class WebModule { }
