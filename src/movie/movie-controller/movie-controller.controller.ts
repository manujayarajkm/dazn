import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { MovieService } from '../movie-service/movie-service.service';
import { CreateMovieDto } from '../dto/create-movie-dto';
import { AuthGuard } from '../../auth/auth.guard';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MovieService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createMovieDto: CreateMovieDto) {
    await this.movieService.create(createMovieDto);
  }

  @Get()
  async findAll() {
    return this.movieService.findAll();
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(@Param('id') id: string,@Body() updateMovieBody: CreateMovieDto){
    return this.movieService.update(id,updateMovieBody);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }

  @Get('/search/:searchParam')
  async search(@Param('searchParam') searchParam:string){
    console.log("param ",searchParam);
    
    return this.movieService.search(searchParam);
  }
}
