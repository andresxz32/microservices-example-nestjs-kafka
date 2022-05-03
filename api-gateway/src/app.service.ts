import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@Inject('VIDEO_SERVICE') private readonly _videoClient: ClientKafka) { }



  createVideo(video) {
    return this._videoClient.emit(
      'createVideo',
      video
    )
  }
}
