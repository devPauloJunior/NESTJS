import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { createPasswordHashed } from 'src/utils/password';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}
  
  async createUser(
    createUserDto: CreateUserDto
  ): Promise<UserEntity> {
    const passwordHashed = await createPasswordHashed(createUserDto.password)
    return this.userRepository.save({
      ...createUserDto,
      password: passwordHashed,
    })
  }

  async findAll() {
    return this.userRepository.find({});
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        registration: id,
      }
    })

    if(!user) {
      throw new NotFoundException(`Usuario: ${id} não encontrado`)
    }

    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
