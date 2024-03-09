import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop({ index: true })
  id: string;
  @Prop()
  name: string;

  @Prop()
  genre: string;

  @Prop()
  rating: number;

  @Prop()
  link: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
