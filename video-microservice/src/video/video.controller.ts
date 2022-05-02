import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Controller()
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @MessagePattern('createVideo')
  create(@Payload() createVideoDto: CreateVideoDto) {
    return this.videoService.create(createVideoDto);
  }

  @MessagePattern('findAllVideo')
  findAll() {
    return this.videoService.findAll();
  }

  @MessagePattern('findOneVideo')
  findOne(@Payload() id: number) {
    return this.videoService.findOne(id);
  }

  @MessagePattern('updateVideo')
  update(@Payload() updateVideoDto: UpdateVideoDto) {
    return this.videoService.update(updateVideoDto.id, updateVideoDto);
  }

  @MessagePattern('removeVideo')
  remove(@Payload() id: number) {
    return this.videoService.remove(id);
  }
}
