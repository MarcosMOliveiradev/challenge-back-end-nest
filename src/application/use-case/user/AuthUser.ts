import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { User } from 'src/application/entity/user/usert.entity';
import { UserRepository } from 'src/application/repository/user/UserRepository';

interface IAuthUserRequet {
  email: string;
  password: string;
}

export interface IAuthUserRespose {
  user: User;
}

@Injectable()
export class AuthUser {
  constructor(private userRepository: UserRepository) {}

  async execut({
    email,
    password,
  }: IAuthUserRequet): Promise<IAuthUserRespose> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('usuario não existe');
    }

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) {
      throw new Error('Email ou Senha invalido');
    }

    return { user };
  }
}
