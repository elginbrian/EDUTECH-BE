import { Repository } from 'typeorm';
import { Tag } from '../tag/entities/tag.entity';
import { CreateTagDto, UpdateTagDto } from '../tag/dto/tag.dto';
export declare class TagService {
    private tagRepository;
    constructor(tagRepository: Repository<Tag>);
    create(createTagDto: CreateTagDto): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findOne(id: number): Promise<Tag>;
    update(id: number, updateTagDto: UpdateTagDto): Promise<Tag>;
    remove(id: number): Promise<void>;
}
