import { Injectable } from '@nestjs/common';

import { GenerateUrlDto } from 'src/dto/url.genrate.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { generateNanoId } from 'src/utils/nanoid.utils';
@Injectable()
export class UrlService {
  constructor(private readonly prismaService: PrismaService) {}

  async generateShortUrl({
    generateUrlDto: { url },
  }: {
    generateUrlDto: GenerateUrlDto;
  }): Promise<string> {
    try {
      console.log('url', url);
      const shortId = generateNanoId({});
      console.log('shortId', shortId);
      const created = await this.prismaService.shortUrl.create({
        data: {
          fullUrl: url,
          shortUrl: shortId,
        },
      });
      console.log('shortUrl', created);
      return `${process.env.APP_URL}${created.shortUrl}`;
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
      const result = await this.prismaService.$transaction(async (prisma) => {
        const shortUrl = await prisma.shortUrl.findUnique({
          where: { shortUrl: shortUrlID },
        });
        if (!shortUrl) {
          throw new Error('Short URL not found');
        }
        await prisma.shortUrl.update({
          where: { shortUrl: shortUrlID },
          data: { clicks: { increment: 1 } },
        });
        return shortUrl.fullUrl;
      });
      return result;
    } catch (error) {
      console.log('Error finding URL:', error);
      throw new Error('Failed to find URL');
    }
  }
}
