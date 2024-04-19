import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'suporte123',
      database: 'TypeOrmBD',
      autoLoadEntities: true,
      synchronize: true,
      entities: [`${__dirname}/**/*.entity{.js, .ts}`],
      // migrations: [`${__dirname}/migrations/{*.js, *.ts}`],
      // migrationsRun: true,
    }),
    TasksModule,
    UsersModule,
    LoginModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
