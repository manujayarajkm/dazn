import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from '../dto/create-movie-dto';
import { Movie } from '../schemas/movie';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private readonly movieModel: Model<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const createdMovie = await this.movieModel.create(createMovieDto);
    return createdMovie;
  }

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedMovie = await this.movieModel.deleteOne({ _id: id });
    return deletedMovie;
  }
}
