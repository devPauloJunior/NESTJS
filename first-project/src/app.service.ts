import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá Back-end!';
  }

  getUser(): string {
    return 'Olá usuário!';
  }
}
