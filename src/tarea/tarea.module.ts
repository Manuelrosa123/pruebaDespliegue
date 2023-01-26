import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TareaSchema } from './schema/tarea.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tarea', schema: TareaSchema }])],
  controllers: [TareaController],
  providers: [TareaService],
  exports: [TareaService]
})
export class TareaModule {}
