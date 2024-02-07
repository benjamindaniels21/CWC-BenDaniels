import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

type LogInDto = {
  username: string;
  password: string;
};
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/log-in')
  async logIn(@Body() logInDto: LogInDto) {
    // console.log(logInDto.username, logInDto.password);
    return await this.authService.logIn(logInDto.username, logInDto.password);
  }
}
