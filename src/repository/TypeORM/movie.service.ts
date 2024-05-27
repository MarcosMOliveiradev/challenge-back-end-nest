import { Injectable } from '@nestjs/common';
import { Movie } from 'src/application/entity/movie/movie.entity';
import { MovieRepository } from 'src/application/repository/movie/MovieRepository';
import { DataSource } from 'typeorm';

@Injectable()
export class MovieService implements MovieRepository {
  constructor(private movieRepository: DataSource) {}
  async create(data: Movie): Promise<void> {
    await this.movieRepository.getRepository(Movie).save(data);
  }
  async listById(id: string): Promise<Movie> {
    const movie = await this.movieRepository
      .getRepository(Movie)
      .findOneById(id);
    if (!movie) {
      throw new Error();
    }

    return movie;
  }
  async update(id: string, data: Movie): Promise<void> {
    await this.movieRepository.getRepository(Movie).update(id, data);
  }
  async delete(id: string): Promise<void> {
    await this.movieRepository.getRepository(Movie).delete(id);
  }

  async list(): Promise<Movie[]> {
    const movie = await this.movieRepository.getRepository(Movie).find();

    return movie;
  }
}
