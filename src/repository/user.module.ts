import { Module } from '@nestjs/common';
import { UserService } from './TypeORM/user.service';
import { UserRepository } from 'src/application/repository/user/UserRepository';
import { Repository } from 'typeorm';

@Module({
  providers: [
    Repository,
    {
      provide: UserRepository,
      useClass: UserService,
    },
  ],
  exports: [UserRepository],
})
export class UserModule {}
