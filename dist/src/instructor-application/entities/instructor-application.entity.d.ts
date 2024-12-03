import { User } from '../../user/entities/user.entity';
export declare class InstructorApplication {
    id: number;
    ktpDocument: string;
    cvDocument: string;
    status: 'pending' | 'approved' | 'rejected';
    user: User;
}
