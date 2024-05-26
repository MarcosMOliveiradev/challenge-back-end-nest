import { Module } from '@nestjs/common';

import { GetUser } from 'src/application/use-case/user/GetUser';
import { UserModule } from 'src/repository/user.module';
import { UserController } from './controllers/user/user.controller';
import { CreateUser } from 'src/application/use-case/user/CreateUser';
import { AuthUser } from 'src/application/use-case/user/AuthUser';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/Auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [UserController],
  providers: [GetUser, CreateUser, AuthUser, JwtService],
})
export class HttpModule {}
