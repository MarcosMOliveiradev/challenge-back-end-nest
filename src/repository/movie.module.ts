import { Module } from '@nestjs/common';
import { MovieRepository } from 'src/application/repository/movie/MovieRepository';
import { Repository } from 'typeorm';
import { MovieService } from './TypeORM/movie.service';

@Module({
  providers: [
    Repository,
    {
      provide: MovieRepository,
      useClass: MovieService,
    },
  ],
  exports: [MovieRepository],
})
export class MovieModule {}
