import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/name')
  async addName(@Body() body: string) {
    console.log('BODY:', body);
    return 'Yay!';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
