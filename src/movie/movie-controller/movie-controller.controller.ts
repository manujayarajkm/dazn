import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MovieService } from '../movie-service/movie-service.service';
import { CreateMovieDto } from '../dto/create-movie-dto';
import { Movie } from '../schemas/movie';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto) {
    await this.movieService.create(createMovieDto);
  }

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Movie> {
    return this.movieService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }
}
