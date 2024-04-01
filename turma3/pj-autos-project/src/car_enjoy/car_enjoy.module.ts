import { Module } from '@nestjs/common';
import { CarEnjoyController } from './car_enjoy.controller';
import { CarEnjoyService } from './car_enjoy.service';

@Module({
  controllers: [CarEnjoyController],
  providers: [CarEnjoyService]
})
export class CarEnjoyModule {}
