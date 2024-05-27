import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateUser } from 'src/application/use-case/user/CreateUser';
import { GetUser } from 'src/application/use-case/user/GetUser';
import { CreateUserDTO } from './DTO/UserDTO';
import { AuthDTO } from './DTO/AuthDTO';
import {
  AuthUser,
  IAuthUserRespose,
} from 'src/application/use-case/user/AuthUser';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller('/user')
export class UserController {
  constructor(
    private getUser: GetUser,
    private createUser: CreateUser,
    private authUser: AuthUser,
    private jwt: JwtService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async get() {
    const user = await this.getUser.execut();
    return user;
  }

  @Post()
  async create(@Body() body: CreateUserDTO) {
    try {
      return await this.createUser.execute(body);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw new ConflictException('Usuario já existe');
      }

      throw new BadRequestException();
    }
  }

  @Post('/auth')
  async auth(@Body() data: AuthDTO): Promise<IAuthUserRespose | unknown> {
    try {
      const { email, passwordBody } = data;

      const { user } = await this.authUser.execut({
        email,
        password: passwordBody,
      });

      const token = await this.jwt.signAsync(
        {
          sub: user.id,
          name: user.name,
          email: user.email,
        },
        { secret: process.env.JWT_PRIVATE_KEY },
      );

      return { token };
    } catch (error) {
      throw error;
    }
  }
}
