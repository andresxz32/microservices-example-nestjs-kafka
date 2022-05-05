import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}


  @MessagePattern('updateQuantity')
  async update(@Payload() userId) {
    const user = await this.userService.findOne(userId.value);
    const quantity = user.quantity_videos + 1;
    return this.userService.update(userId.value, quantity );
  }



  @MessagePattern('createUser')
  async create(@Payload() user) {
    return this.userService.create(user.value);
  }
}
