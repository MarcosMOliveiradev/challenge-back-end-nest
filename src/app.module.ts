import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { PostgreConfigServer } from './config/postgre.config.service';
import { HttpModule } from './infra/http.module';
import { UserModule } from './repository/user.module';

@Module({
  imports: [
    HttpModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgreConfigServer,
      inject: [PostgreConfigServer],
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
