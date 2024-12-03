import { Repository } from 'typeorm';
import { InstructorApplication } from '../instructor-application/entities/instructor-application.entity';
import { CreateInstructorApplicationDto } from './dto/create-instructor-application.dto';
import { User } from '../user/entities/user.entity';
export declare class InstructorApplicationService {
    private instructorApplicationRepository;
    private userRepository;
    constructor(instructorApplicationRepository: Repository<InstructorApplication>, userRepository: Repository<User>);
    submitApplication(userId: number, createInstructorApplicationDto: CreateInstructorApplicationDto): Promise<InstructorApplication>;
    reviewApplication(applicationId: number, status: 'approved' | 'rejected'): Promise<InstructorApplication>;
    getAllApplications(): Promise<InstructorApplication[]>;
}
