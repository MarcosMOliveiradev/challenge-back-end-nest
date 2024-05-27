import { ConflictException, Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Movie } from 'src/application/entity/movie/movie.entity';
import { MovieRepository } from 'src/application/repository/movie/MovieRepository';

interface ICreateUserRequest {
  name: string;
  category: string;
  duration: string;
  launch: string;
  photo?: string;
}

@Injectable()
export class CreateMovie {
  constructor(private movieRepository: MovieRepository) {}

  async execute(data: ICreateUserRequest) {
    try {
      const { category, name, duration, launch, photo } = data;
      const id = randomUUID();

      const movie = new Movie(id, name, category, duration, launch, photo);

      return await this.movieRepository.create(movie);
    } catch (error) {
      throw new ConflictException();
    }
  }
}
