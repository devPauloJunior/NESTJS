import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { validatePassword } from 'src/utils/password';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LoginService {
  constructor(
    private readonly userService: UsersService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginDto> {
    const user: UserEntity | undefined = await this.userService.findEmail(loginDto.email).catch(() => undefined);

    const isMatch = await validatePassword(
      loginDto.password,
      user?.password || '',
    );

    if (!user || !isMatch) {
      throw new NotFoundException('Email or passord invalid');
    }

    return {
      ...user,
      password: undefined,
    } 
  }

}
