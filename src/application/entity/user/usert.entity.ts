import { UUID } from 'node:crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: UUID;

  @Column({ length: 50 })
  name: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column({ nullable: true })
  avata?: string;

  @Column('date')
  createAt: Date;

  @Column({ nullable: true })
  updateAt?: Date;

  constructor() {
    if (!this.createAt) {
      this.createAt = new Date();
    }
  }
}
