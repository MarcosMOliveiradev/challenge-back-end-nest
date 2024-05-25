import { UUID } from 'node:crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column({ length: 50 })
  name: string;

  @Column('text')
  category: string;

  @Column('text')
  duration: string;

  @Column('text')
  photo: string;

  @Column('text')
  launch: string;

  @Column('date')
  createAt: Date;

  @Column('date')
  updateAt: Date;
}
