import { InstructorApplication } from '../../instructor-application/entities/instructor-application.entity';
import { Content } from 'src/content/entities/content.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    role: string;
    applications: InstructorApplication[];
    content: Content[];
}
