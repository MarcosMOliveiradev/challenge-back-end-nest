import { IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  passwordBody: string;

  avata?: string;

  constructor(
    name: string,
    email: string,
    passwordBody: string,
    avata?: string,
  ) {
    this.name = name;
    this.email = email;
    this.passwordBody = passwordBody;
    this.avata = avata;
  }
}
