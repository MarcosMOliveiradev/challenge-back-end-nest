import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from 'src/application/entity/user/usert.entity';
import { UserRepository } from 'src/application/repository/user/UserRepository';

@Injectable()
export class UserService implements UserRepository {
  constructor(private userRepository: DataSource) {}
  async findByEmail(email: string) {
    const user = await this.userRepository
      .getRepository(User)
      .findOneBy({ email });

    return user;
  }

  async create(data: User): Promise<void> {
    await this.userRepository.getRepository(User).save(data);
  }

  async findAll(): Promise<User[]> {
    const user = await this.userRepository.getRepository(User).find();

    return user;
  }
}
