import { User } from '../../user/entities/user.entity';
import { Tag } from '../../tag/entities/tag.entity';
export declare class Content {
    id: number;
    title: string;
    description: string;
    type: 'video' | 'text' | 'audio';
    url: string;
    instructor: User;
    tag: Tag;
}
