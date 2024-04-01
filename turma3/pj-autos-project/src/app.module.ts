import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CarsModule } from './cars/cars.module';
import { CarEnjoyModule } from './car_enjoy/car_enjoy.module';

@Module({
  imports: [UserModule, CarsModule, CarEnjoyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
