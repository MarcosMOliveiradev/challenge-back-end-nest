import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { UserRepository } from 'src/application/repository/user/UserRepository';

interface ICreateUserRequest {
  name: string;
  email: string;
  password: string;
  avata?: string | null;
}

@Injectable()
export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(data: ICreateUserRequest) {
    const { email, name, password, avata } = data;
    const id = randomUUID();
    const createAt = new Date();

    await this.userRepository.create({
      id,
      createAt,
      email,
      name,
      password,
      avata,
    });
  }
}
