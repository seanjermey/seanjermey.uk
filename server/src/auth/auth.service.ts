import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { UserEntity } from './user.entity';

@Injectable()
export class AuthService {
  /**
   *
   * @param userRepository
   * @param jwtService
   */
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  /**
   *
   * @param authCredentialsDto
   */
  async register(authCredentialsDto: AuthCredentialsDto): Promise<UserEntity> {
    return await this.userRepository.register(authCredentialsDto);
  }

  /**
   *
   * @param authCredentialsDto
   */
  async login(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const authenticated = await this.userRepository.validatePassword(
      authCredentialsDto,
    );

    if (!authenticated) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = {
      username: authCredentialsDto.username,
    };

    return {
      accessToken: await this.jwtService.sign(payload),
    };
  }

  /**
   *
   * @param accessToken
   */
  async isAuthenticated(accessToken: string) {
    try {
      return !!this.jwtService.verify(accessToken);
    } catch (e) {
      return false;
    }
  }
}
