import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { DatabaseModule } from 'src/database/database.module';
import { videoProviders } from './video.providers';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [DatabaseModule,
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'user',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'user-consumer',
          },
        },
      },
    ])],
  controllers: [VideoController],
  providers: [VideoService, ...videoProviders,]
})
export class VideoModule { }
