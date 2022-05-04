import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}


  @MessagePattern('updateQuantity')
  async update(@Payload() userId) {
    const user = await this.userService.findOne(userId);
    //console.log(user);
    //return this.userService.update(userId, );
  }



  @MessagePattern('createUser')
  async create(@Payload() user) {
    console.log(user);
    return this.userService.create(user.value);
  }
}
