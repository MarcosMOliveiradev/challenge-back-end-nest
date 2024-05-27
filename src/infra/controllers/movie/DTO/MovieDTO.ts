import { IsNotEmpty } from 'class-validator';

export class CreateMovirDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  duration: string;

  @IsNotEmpty()
  launch: string;

  photo?: string;

  constructor(
    name: string,
    category: string,
    duration: string,
    launch: string,
    photo?: string,
  ) {
    this.name = name;
    this.category = category;
    this.duration = duration;
    this.launch = launch;
    this.photo = photo;
  }
}
