import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: AuthDto) {
    return await this.authService.register(dto);
  }
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Post('login')
  async login(@Body() dto: AuthDto) {
    return await this.authService.login(dto);
  }
}
