import { Module } from "@nestjs/common";
import { MoviesModule } from "./movies/movies.module";
import { AppController } from "./app.controller";

// Decorate can add functionality to a class
// 클래스에 함수 기능을 추가해줌
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
