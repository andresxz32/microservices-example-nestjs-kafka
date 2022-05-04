import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
  ) {}



  create(createUserDto: CreateUserDto) {
    return this._userRepository.create(createUserDto)
  }

  findAll() {
    return this._userRepository.find();
  }

  findOne(id: number) {
    return this._userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this._userRepository.update(id,updateUserDto)
  }
}
