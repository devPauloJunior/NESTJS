import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [`${__dirname}/**/*.entity{.js, .ts}`],
      // migrations: [`${__dirname}/migrations/{*.js, *.ts}`],
      // migrationsRun: true,
    } as TypeOrmModuleOptions),
    TasksModule,
    UsersModule,
    LoginModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
