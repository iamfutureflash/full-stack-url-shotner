import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { GenerateUrlDto } from 'src/dto/url.genrate.dto';
import { UrlService } from './url.service';
import { Response } from 'express';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  generate(@Body() generateUrlDto: GenerateUrlDto) {
    return this.urlService.generateShortUrl({ generateUrlDto });
  }

  @Get()
  findAll() {
    return this.urlService.findAll();
  }

  @Get(':shortUrlID')
  async redirect(
    @Param('shortUrlID') shortUrlID: string,
    @Res() res: Response,
  ) {
    const fullURL = await this.urlService.findSortUrl({ shortUrlID });

    return res.redirect(fullURL);
  }
}
