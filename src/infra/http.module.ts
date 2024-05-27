import { Module } from '@nestjs/common';

import { GetUser } from 'src/application/use-case/user/GetUser';
import { UserModule } from 'src/repository/user.module';
import { UserController } from './controllers/user/user.controller';
import { CreateUser } from 'src/application/use-case/user/CreateUser';
import { AuthUser } from 'src/application/use-case/user/AuthUser';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/Auth.module';
import { MovieController } from './controllers/movie/movie.controller';
import { MovieModule } from 'src/repository/movie.module';
import { ListMovie } from 'src/application/use-case/movie/ListMovie';
import { CreateMovie } from 'src/application/use-case/movie/CreateMovie';

@Module({
  imports: [UserModule, AuthModule, MovieModule],
  controllers: [UserController, MovieController],
  providers: [
    GetUser,
    CreateUser,
    AuthUser,
    JwtService,
    ListMovie,
    CreateMovie,
  ],
})
export class HttpModule {}
