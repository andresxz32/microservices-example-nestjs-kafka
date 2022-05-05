import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    public userRepository: Repository<User>,
  ) { }


  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto as any);
    return await this.userRepository.save(user);
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException('Usuario no existe!!');
    return user;
  }

  async update(id: number, quantity_videos: number) {
    const user = await this.findOne(id);
    const editedUser = { ...user, quantity_videos }
    return await this.userRepository.save(editedUser);
  }
}
