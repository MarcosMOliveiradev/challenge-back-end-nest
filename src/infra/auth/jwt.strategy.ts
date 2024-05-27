import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { z } from 'zod';

const tokenSchema = z.object({
  sub: z.string().uuid(),
});

type TokenSchema = z.infer<typeof tokenSchema>;

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_PRIVATE_KEY,
      algorithm: ['RS256'],
    });
  }

  async validate(paylod: TokenSchema) {
    return tokenSchema.parse(paylod);
  }
}
