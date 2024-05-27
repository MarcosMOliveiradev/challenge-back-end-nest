import { Injectable } from '@nestjs/common';
import { Movie } from 'src/application/entity/movie/movie.entity';
import { MovieRepository } from 'src/application/repository/movie/MovieRepository';
import { DataSource } from 'typeorm';

@Injectable()
export class MovieService implements MovieRepository {
  constructor(private userRepository: DataSource) {}

  async list(): Promise<Movie[]> {
    const movie = await this.userRepository.getRepository(Movie).find();

    return movie;
  }
}
