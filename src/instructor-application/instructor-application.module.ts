import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstructorApplicationService } from './instructor-application.service';
import { InstructorApplicationController } from './instructor-application.controller';
import { InstructorApplication } from './entities/instructor-application.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([InstructorApplication]), UserModule],
  providers: [InstructorApplicationService],
  controllers: [InstructorApplicationController],
})
export class InstructorApplicationModule {}
