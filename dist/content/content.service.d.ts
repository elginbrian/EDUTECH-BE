import { Repository } from 'typeorm';
import { Content } from '../content/entities/content.entity';
import { CreateContentDto } from './dto/create-content.dto';
import { User } from '../user/entities/user.entity';
import { Tag } from '../tag/entities/tag.entity';
export declare class ContentService {
    private contentRepository;
    private userRepository;
    private tagRepository;
    constructor(contentRepository: Repository<Content>, userRepository: Repository<User>, tagRepository: Repository<Tag>);
    uploadContent(instructorId: number, createContentDto: CreateContentDto): Promise<Content>;
}
