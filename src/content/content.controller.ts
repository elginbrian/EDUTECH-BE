import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { User } from '../auth/user.decorator';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post('upload')
  @UseGuards(JwtAuthGuard)
  async uploadContent(
    @Body() createContentDto: CreateContentDto,
    @User() user: any,
  ) {
    return this.contentService.uploadContent(user.id, createContentDto);
  }
}
