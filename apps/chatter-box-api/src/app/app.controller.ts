import { Body, Controller, Get, Post,Request, UseGuards } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Public } from '../auth/public.decorator';
import { User } from '../users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
    ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Public()
  @Post('auth/login')
  async login(@Request() req, @Body() body:User) {
    console.log(body)
    return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
