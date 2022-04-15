import { Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
interface User {
  role: string;
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): User {
    return this.appService.getHello();
  }

  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
