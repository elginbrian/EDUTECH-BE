"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructorApplicationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const instructor_application_entity_1 = require("../instructor-application/entities/instructor-application.entity");
const user_entity_1 = require("../user/entities/user.entity");
let InstructorApplicationService = class InstructorApplicationService {
    constructor(instructorApplicationRepository, userRepository) {
        this.instructorApplicationRepository = instructorApplicationRepository;
        this.userRepository = userRepository;
    }
    async submitApplication(userId, createInstructorApplicationDto) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        const application = new instructor_application_entity_1.InstructorApplication();
        application.ktpDocument = createInstructorApplicationDto.ktpDocument;
        application.cvDocument = createInstructorApplicationDto.cvDocument;
        application.user = user;
        return await this.instructorApplicationRepository.save(application);
    }
    async reviewApplication(applicationId, status) {
        const application = await this.instructorApplicationRepository.findOne({
            where: { id: applicationId },
        });
        if (status === 'approved') {
            application.status = 'approved';
            await this.userRepository.update(application.user.id, {
                role: 'instructor',
            });
        }
        else {
            application.status = 'rejected';
        }
        return await this.instructorApplicationRepository.save(application);
    }
    async getAllApplications() {
        return this.instructorApplicationRepository.find({ relations: ['user'] });
    }
};
exports.InstructorApplicationService = InstructorApplicationService;
exports.InstructorApplicationService = InstructorApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(instructor_application_entity_1.InstructorApplication)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], InstructorApplicationService);
//# sourceMappingURL=instructor-application.service.js.map