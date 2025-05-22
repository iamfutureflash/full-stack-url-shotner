import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { GenerateUrlDto } from 'src/dto/url.genrate.dto';
import { Prisma } from '@prisma/client';
import { generateNanoId } from 'src/utils/nanoid.utils';
@Injectable()
export class UrlService {
  constructor(private readonly prismaService: PrismaService) {}

  async generateShortUrl({
    generateUrlDto: { url },
  }: {
    generateUrlDto: GenerateUrlDto;
  }): Promise<Prisma.ShortUrlCreateInput> {
    try {
      console.log('url', url);
      const shortId = generateNanoId({ length: 7 });
      console.log('shortId', shortId);
      const created = await this.prismaService.shortUrl.create({
        data: {
          fullUrl: url,
          shortUrl: shortId,
        },
      });
      console.log('shortUrl', created);
      return created;
    } catch (error) {
      console.log('Error generating URL:', error);
      throw new Error('Failed to generate URL');
    }
  }

  async findAll() {
    try {
      const urls = await this.prismaService.shortUrl.findMany();
      console.log('All URLs:', urls);
      return urls;
    } catch (error) {
      console.log('Error finding all URLs:', error);
      throw new Error('Failed to find all URLs');
    }
  }

  async findSortUrl({ shortUrlID }: { shortUrlID: string }): Promise<string> {
    try {
      const shortUrl = await this.prismaService.shortUrl.findUnique({
        where: { shortUrl: shortUrlID },
      });
      if (!shortUrl) {
        throw new Error('Short URL not found');
      }
      console.log('Found URL:', shortUrl);
      return shortUrl.fullUrl;
    } catch (error) {
      console.log('Error finding URL:', error);
      throw new Error('Failed to find URL');
    }
  }
}
