import { Movie } from 'src/application/entity/movie/movie.entity';

export abstract class MovieRepository {
  abstract list(): Promise<Movie[]>;
}
