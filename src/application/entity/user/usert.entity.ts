import { UUID } from 'node:crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: UUID;

  @Column({ length: 50 })
  name: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text')
  password: string;

  @Column({ nullable: true })
  avata?: string;

  @Column('date', { nullable: true })
  createAt?: Date;

  @Column({ nullable: true })
  updateAt?: Date;

  constructor(
    id: UUID,
    name: string,
    email: string,
    password: string,
    avata?: string,
  ) {
    if (this.createAt === undefined || this.createAt === null) {
      this.createAt = new Date();
    }

    if (this.updateAt === undefined || this.updateAt === null) {
      this.updateAt = new Date();
    }

    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.avata = avata;
  }
}
