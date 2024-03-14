import { Module } from '@nestjs/common';
import { AppController, AppControllerUsers } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, AppControllerUsers],
  providers: [AppService],
})
export class AppModule {}
