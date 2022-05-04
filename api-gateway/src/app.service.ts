import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
    @Inject('VIDEO_SERVICE') private readonly _videoClient: ClientKafka,
    @Inject('USER_SERVICE') private readonly _userClient: ClientKafka
    ) { }



  createVideo(video) {
    return this._videoClient.emit(
      'createVideo',
      video
    )
  }

  createUser(user) {
    return this._userClient.emit(
      'createUser',
      user
    )
  }
}
