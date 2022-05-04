import { ConsoleLogger, Inject, Injectable, Logger } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Model } from 'mongoose';
import { CreateVideoDto } from './dto/create-video.dto';
import { Video } from './entities/video.model';

@Injectable()
export class VideoService {
  constructor(
    @Inject('VIDEO_MODEL')
    private readonly _videoModel: Model<Video>,
    @Inject('USER_SERVICE') private readonly _userClient: ClientKafka
  ) {}

  async create(createVideoDto: CreateVideoDto) {
    Logger.log('ENTRO al create video');
    console.log('entro al create');
    await this._videoModel.create(createVideoDto);
    this.updateQuantity(createVideoDto.userId)
  }

  updateQuantity(userId){
    this._userClient.send('updateQuantity',userId)
  }
}
