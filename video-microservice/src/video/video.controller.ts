import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Controller()
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @MessagePattern('createVideo')
  create(@Payload() video) {
    return this.videoService.create(video.value);
  }

}
