import { Module } from '@nestjs/common';
import { GetUser } from 'src/application/use-case/user/GetUser';
import { UserModule } from 'src/repository/user.module';
import { UserController } from './controllers/user/user.controller';
import { CreateUser } from 'src/application/use-case/user/CreateUser';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [GetUser, CreateUser],
})
export class HttpModule {}
