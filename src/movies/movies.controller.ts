import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { Movie } from "./entities/movie.entity";
import { MoviesService } from "./movies.service";

@Controller("movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // If you want something, you need to ask for it.
  // 무언가를 필요하면 너희가 요청해야만 한다.
  @Get("/:tomato")
  getOne(@Param("tomato") movieId: number) {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete("/:tomato")
  remove(@Param("tomato") movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch("/:id")
  patch(@Param("id") movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
