import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  /**
   *
   * @param authCredentialsDto
   */
  // async register({
  //   username,
  //   password,
  // }: AuthCredentialsDto): Promise<UserEntity> {
  //   try {
  //     const user = await this.save({
  //       username,
  //       password: await this.hashPassword(password),
  //     });
  //
  //     delete user.password;
  //
  //     return user;
  //   } catch (err) {
  //     switch (err.code) {
  //       case '23505':
  //         throw new ConflictException('Username already exists');
  //
  //       default:
  //         throw new InternalServerErrorException();
  //     }
  //   }
  // }

  /**
   *
   * @param username
   * @param password
   */
  async validatePassword({
    username,
    password,
  }: AuthCredentialsDto): Promise<boolean> {
    const user = await this.findOne({ username });

    return user && (await user.validatePassword(password));
  }

  /**
   *
   * @param password
   * @param salt
   */
  private async hashPassword(password: string, salt?: string): Promise<string> {
    return await bcrypt.hash(password, salt || (await bcrypt.genSalt()));
  }
}
