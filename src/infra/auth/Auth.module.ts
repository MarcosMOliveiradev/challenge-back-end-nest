import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secretOrPrivateKey: process.env.JWT_PRIVATE_KEY,
    }),
  ],
})
export class AuthModule {}
