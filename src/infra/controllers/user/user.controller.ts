import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from 'src/application/use-case/user/CreateUser';
import { GetUser } from 'src/application/use-case/user/GetUser';
import { CreateUserDTO } from './DTO/UserDTO';

@Controller('/user')
export class UserController {
  constructor(
    private getUser: GetUser,
    private createUser: CreateUser,
  ) {}

  @Get()
  async get() {
    const user = await this.getUser.execut();
    return user;
  }

  @Post()
  async create(@Body() body: CreateUserDTO) {
    await this.createUser.execute(body);
  }
}
