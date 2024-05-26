import { IsNotEmpty } from 'class-validator';

export class AuthDTO {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  passwordBody: string;

  constructor(email: string, passwordBody: string) {
    this.email = email;
    this.passwordBody = passwordBody;
  }
}
