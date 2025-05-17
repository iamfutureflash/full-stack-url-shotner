import { Body, Controller, Post } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { GenerateUrlDto } from 'src/dto/url.genrate.dto';


@Controller('url')
export class UrlController {

    @Post('generate')
    generate(@Body() generateUrlDto: GenerateUrlDto) {
        const { url } = generateUrlDto;
        console.log('url', url);
        const shortId = nanoid(10);
        return {
            shortUrl: `${url}${shortId}`,
        };
    }

}
