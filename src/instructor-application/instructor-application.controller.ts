import {
  Controller,
  Post,
  Body,
  Param,
  Put,
  Get,
  UseGuards,
} from '@nestjs/common';
import { InstructorApplicationService } from './instructor-application.service';
import { CreateInstructorApplicationDto } from './dto/create-instructor-application.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/role.decorator';
import { User } from 'src/auth/user.decorator';

@Controller('instructor-application')
export class InstructorApplicationController {
  constructor(
    private readonly instructorApplicationService: InstructorApplicationService,
  ) {}

  @Post('submit')
  @UseGuards(JwtAuthGuard)
  async submitApplication(
    @Body() createInstructorApplicationDto: CreateInstructorApplicationDto,
    @User() user: any,
  ) {
    return this.instructorApplicationService.submitApplication(
      user.id,
      createInstructorApplicationDto,
    );
  }

  @Put('review/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async reviewApplication(
    @Param('id') id: number,
    @Body('status') status: 'approved' | 'rejected',
  ) {
    return this.instructorApplicationService.reviewApplication(id, status);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async getAllApplications() {
    return this.instructorApplicationService.getAllApplications();
  }
}
