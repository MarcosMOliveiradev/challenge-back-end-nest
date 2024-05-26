import { ConflictException, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { randomUUID } from 'node:crypto';
import { User } from 'src/application/entity/user/usert.entity';
import { UserRepository } from 'src/application/repository/user/UserRepository';

interface ICreateUserRequest {
  name: string;
  email: string;
  passwordBody: string;
  avata?: string;
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(data: ICreateUserRequest) {
    try {
      const { email, name, passwordBody, avata } = data;
      const id = randomUUID();

      const password = await hash(passwordBody, 6);

      const user = await new User(id, name, email, password, avata);

      return await this.userRepository.create(user);
    } catch (error) {
      throw new ConflictException();
    }
  }
}
