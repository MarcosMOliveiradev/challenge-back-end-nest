import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/application/repository/user/UserRepository';

@Injectable()
export class GetUser {
  constructor(private userRepository: UserRepository) {}

  async execut() {
    const user = await this.userRepository.findAll();

    return user;
  }
}
