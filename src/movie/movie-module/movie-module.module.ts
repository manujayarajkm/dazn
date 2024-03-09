import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesController } from '../movie-controller/movie-controller.controller';
import { MovieService } from '../movie-service/movie-service.service';
import { Movie, MovieSchema } from '../schemas/movie';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  controllers: [MoviesController],
  providers: [MovieService],
})
export class MovieModule {}
