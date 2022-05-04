import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33060,
      username: 'root',
      password: '123456',
      database: 'user_microservice',
      entities: [User],
      synchronize: true,
    }),
    ClientsModule.register([
      {
        name: 'VIDEO_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'video',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'video-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
