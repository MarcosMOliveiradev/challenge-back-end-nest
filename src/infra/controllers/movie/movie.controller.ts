import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ListMovie } from 'src/application/use-case/movie/ListMovie';

@Controller('/movie')
@UseGuards(AuthGuard('jwt'))
export class MovieController {
  constructor(private listMovie: ListMovie) {}

  @Get()
  async list() {
    const movie = await this.listMovie.execut();
    return { movie };
  }
}
