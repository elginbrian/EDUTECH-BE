import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { Content } from './entities/content.entity';
import { UserModule } from 'src/user/user.module';
import { TagModule } from 'src/tag/tag.module';

@Module({
  imports: [TypeOrmModule.forFeature([Content]), UserModule, TagModule],
  providers: [ContentService],
  controllers: [ContentController],
})
export class ContentModule {}
