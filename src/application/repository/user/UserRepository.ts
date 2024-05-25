import { User } from 'src/application/entity/user/usert.entity';

export abstract class UserRepository {
  abstract findAll(): Promise<User[]>;
  abstract create(data: User): Promise<void>;
}
