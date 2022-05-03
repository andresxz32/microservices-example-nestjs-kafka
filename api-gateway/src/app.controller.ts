import { AppService } from './app.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Post()
  createVideo(@Body() video) {
    return this.appService.createVideo(video);

  }



}

