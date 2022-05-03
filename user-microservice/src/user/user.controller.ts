import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}


  @MessagePattern('updateQuantity')
  async update(@Payload() userId) {
    const user = await this.userService.findOne(userId);
    console.log(user);
    //return this.userService.update(userId, );
  }
}
