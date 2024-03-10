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

  async create(createMovieDto: CreateMovieDto){
    try {
      const createdMovie = await this.movieModel.create(createMovieDto);
      return createdMovie;
    } catch (error) {
      console.error("error ",error);
      return null;
    }

  }

  async findAll(): Promise<Movie[]> {
    try {
      return this.movieModel.find().exec();
    } catch (error) {
      console.error("error ",error);
      return [];
    }
  }

  async search(searchParam:string){
    try {
      const query = {$or:[{name:{$regex: searchParam, $options: 'i'}},{genre:{$regex: searchParam, $options: 'i'}}]}
      return await this.movieModel.find(query).exec()
    } catch (error) {
      console.error("error ",error);
      return [];
    }

  }

  async update(id:string,movieBody:CreateMovieDto){
    try {
      await this.delete(id);    
      const createRec= await this.create(movieBody);
      return createRec
    } catch (error) {
      console.error("error ",error);
      return {};
    }
  }

  async delete(id: string) {
    try {
      const deletedMovie = await this.movieModel.deleteOne({ _id: id });
      return deletedMovie;
    } catch (error) {
      console.error("error ",error);
      return {};
    }
  }
}
