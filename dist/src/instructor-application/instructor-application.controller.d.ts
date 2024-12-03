import { InstructorApplicationService } from './instructor-application.service';
import { CreateInstructorApplicationDto } from './dto/create-instructor-application.dto';
export declare class InstructorApplicationController {
    private readonly instructorApplicationService;
    constructor(instructorApplicationService: InstructorApplicationService);
    submitApplication(createInstructorApplicationDto: CreateInstructorApplicationDto, user: any): Promise<import("./entities/instructor-application.entity").InstructorApplication>;
    reviewApplication(id: number, status: 'approved' | 'rejected'): Promise<import("./entities/instructor-application.entity").InstructorApplication>;
    getAllApplications(): Promise<import("./entities/instructor-application.entity").InstructorApplication[]>;
}
