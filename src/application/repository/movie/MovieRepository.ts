import { Movie } from 'src/application/entity/movie/movie.entity';

export abstract class MovieRepository {
  abstract list(): Promise<Movie[]>;
  abstract create(data: Movie): Promise<void>;
  abstract listById(id: string): Promise<Movie>;
  abstract update(id: string, data: Movie): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
