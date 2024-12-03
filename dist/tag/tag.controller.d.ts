import { TagService } from './tag.service';
import { CreateTagDto, UpdateTagDto } from '../tag/dto/tag.dto';
import { Tag } from '../tag/entities/tag.entity';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    create(createTagDto: CreateTagDto): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findOne(id: number): Promise<Tag>;
    update(id: number, updateTagDto: UpdateTagDto): Promise<Tag>;
    remove(id: number): Promise<void>;
}
