import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ListMovie } from 'src/application/use-case/movie/ListMovie';
import { CreateMovirDTO } from './DTO/MovieDTO';
import { CreateMovie } from 'src/application/use-case/movie/CreateMovie';

@Controller('/movie')
@UseGuards(AuthGuard('jwt'))
export class MovieController {
  constructor(
    private listMovie: ListMovie,
    private createMovie: CreateMovie,
  ) {}

  @Get()
  async list() {
    const movie = await this.listMovie.execut();
    return { movie };
  }

  @Post()
  async CreateMovie(@Body() data: CreateMovirDTO) {
    await this.createMovie.execute(data);
  }
}
