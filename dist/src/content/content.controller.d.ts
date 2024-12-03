import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
export declare class ContentController {
    private readonly contentService;
    constructor(contentService: ContentService);
    uploadContent(createContentDto: CreateContentDto, user: any): Promise<import("./entities/content.entity").Content>;
}
