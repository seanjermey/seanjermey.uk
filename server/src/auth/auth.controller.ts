import {
  Body,
  Controller,
  Post,
  ValidationPipe,
  Headers,
  Get,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { UserEntity } from './user.entity';

@Controller()
export class AuthController {
  /**
   *
   * @param authService
   */
  constructor(private authService: AuthService) {}

  /**
   *
   * @param authCredentialsDto
   */
  @Post('/api/auth/register')
  register(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<UserEntity> {
    return this.authService.register(authCredentialsDto);
  }

  /**
   *
   * @param authCredentialsDto
   */
  @Post('/api/auth/login')
  login(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.login(authCredentialsDto);
  }

  /**
   *
   * @param accessToken
   */
  @Get('/api/auth/logged-in')
  isAuthenticated(@Headers('accesstoken') accessToken: string) {
    return this.authService.isAuthenticated(accessToken);
  }
}
