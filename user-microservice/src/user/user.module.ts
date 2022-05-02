import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './user.providers';

@Module({
  imports:  [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, UserService]
})
export class UserModule {}
