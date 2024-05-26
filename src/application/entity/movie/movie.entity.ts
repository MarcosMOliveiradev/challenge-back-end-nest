import { UUID } from 'node:crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryColumn()
  id: UUID;

  @Column({ length: 50 })
  name: string;

  @Column('text')
  category: string;

  @Column('text')
  duration: string;

  @Column('text')
  launch: string;

  @Column({ nullable: true })
  photo?: string;

  @Column('date', { nullable: true })
  createAt?: Date;

  @Column({ nullable: true })
  updateAt?: Date;

  constructor(
    id: UUID,
    name: string,
    category: string,
    duration: string,
    launch: string,
    photo?: string,
  ) {
    if (this.createAt === undefined || this.createAt === null) {
      this.createAt = new Date();
    }

    if (this.updateAt === undefined || this.updateAt === null) {
      this.updateAt = new Date();
    }

    this.id = id;
    this.name = name;
    this.category = category;
    this.duration = duration;
    this.launch = launch;
    this.photo = photo;
  }
}
