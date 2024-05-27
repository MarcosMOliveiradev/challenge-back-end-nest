import { Injectable } from '@nestjs/common';
import { MovieRepository } from 'src/application/repository/movie/MovieRepository';

@Injectable()
export class ListMovie {
  constructor(private movieRepository: MovieRepository) {}

  async execut() {
    const movie = await this.movieRepository.list();

    return movie;
  }
}
