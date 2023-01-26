import { Controller, Get, Res, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/web/tareas')
  getHello(@Res() res) {
    //return this.appService.getHello();
  }
}
