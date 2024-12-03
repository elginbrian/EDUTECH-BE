import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InstructorApplication } from '../instructor-application/entities/instructor-application.entity';
import { CreateInstructorApplicationDto } from './dto/create-instructor-application.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class InstructorApplicationService {
  constructor(
    @InjectRepository(InstructorApplication)
    private instructorApplicationRepository: Repository<InstructorApplication>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async submitApplication(
    userId: number,
    createInstructorApplicationDto: CreateInstructorApplicationDto,
  ): Promise<InstructorApplication> {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    const application = new InstructorApplication();
    application.ktpDocument = createInstructorApplicationDto.ktpDocument;
    application.cvDocument = createInstructorApplicationDto.cvDocument;
    application.user = user;

    return await this.instructorApplicationRepository.save(application);
  }

  async reviewApplication(
    applicationId: number,
    status: 'approved' | 'rejected',
  ): Promise<InstructorApplication> {
    const application = await this.instructorApplicationRepository.findOne({
      where: { id: applicationId },
    });

    if (status === 'approved') {
      application.status = 'approved';
      await this.userRepository.update(application.user.id, {
        role: 'instructor',
      });
    } else {
      application.status = 'rejected';
    }

    return await this.instructorApplicationRepository.save(application);
  }

  async getAllApplications(): Promise<InstructorApplication[]> {
    return this.instructorApplicationRepository.find({ relations: ['user'] });
  }
}
