import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gender, TypeUser, UserEntity, UserRole } from './entities/user.entity';
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
    return this.userRepository.find()
  }

  async findName(name: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        name,
      },
    });

    if (!user) {
    throw new NotFoundException(`User name: ${name} Not Found`);
    }

    return user;
  }

  async findEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) {
    throw new NotFoundException(`User email: ${email} Not Found`);
    }

    return user;
  }
  
  async findByType(typeUser: TypeUser) {
    try {
      const user = await this.userRepository.find({
        where: {
          typeUser,
        },
      });
      return user;
    } catch {
      throw new NotFoundException(`Type user: ${typeUser} Not Found`);
    }
  }

  async findByGender(gender: Gender) {
    try {
      const user = await this.userRepository.find({
        where: {
          gender,
        },
      });
      return user;
    } catch {
      throw new NotFoundException(`Gender user: ${gender} Not Found`);
    }
  }

  async findByRole(role: UserRole) {
    try {
      const user = await this.userRepository.find({
        where: {
          role,
        },
      });
      return user;
    } catch {
      throw new NotFoundException(`User role: ${role} Not Found`);
    }
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
