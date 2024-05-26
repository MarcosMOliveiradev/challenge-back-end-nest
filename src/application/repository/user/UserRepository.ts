import { User } from 'src/application/entity/user/usert.entity';

export abstract class UserRepository {
  abstract findAll(): Promise<User[]>;
  abstract create(data: User): Promise<void>;
  abstract findByEmail(email: string): Promise<User | null>;
}
