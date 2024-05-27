import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { PostgreConfigServer } from './config/postgre.config.service';
import { HttpModule } from './infra/http.module';
import { UserModule } from './repository/user.module';
import { AuthModule } from './infra/auth/Auth.module';
import { envSchema } from './env';
import { MovieModule } from './repository/movie.module';

@Module({
  imports: [
    HttpModule,
    UserModule,
    MovieModule,
    AuthModule,
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgreConfigServer,
      inject: [PostgreConfigServer],
    }),
  ],
  providers: [PostgreConfigServer],
})
export class AppModule {}
