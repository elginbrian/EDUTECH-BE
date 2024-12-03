import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from '../content/entities/content.entity';
import { CreateContentDto } from './dto/create-content.dto';
import { User } from '../user/entities/user.entity';
import { Tag } from '../tag/entities/tag.entity';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async uploadContent(
    instructorId: number,
    createContentDto: CreateContentDto,
  ): Promise<Content> {
    const instructor = await this.userRepository.findOne({
      where: { id: instructorId },
    });
    const tag = await this.tagRepository.findOne({
      where: { id: createContentDto.tagId },
    });

    const content = new Content();
    content.title = createContentDto.title;
    content.description = createContentDto.description;
    content.type = createContentDto.type;
    content.url = createContentDto.url;
    content.instructor = instructor;
    content.tag = tag;

    return await this.contentRepository.save(content);
  }
}
