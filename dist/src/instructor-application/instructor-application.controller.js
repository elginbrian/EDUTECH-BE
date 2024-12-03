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
exports.InstructorApplicationController = void 0;
const common_1 = require("@nestjs/common");
const instructor_application_service_1 = require("./instructor-application.service");
const create_instructor_application_dto_1 = require("./dto/create-instructor-application.dto");
const jwt_guard_1 = require("../auth/jwt.guard");
const role_guard_1 = require("../auth/role.guard");
const role_decorator_1 = require("../auth/role.decorator");
const user_decorator_1 = require("src/auth/user.decorator");
let InstructorApplicationController = class InstructorApplicationController {
    constructor(instructorApplicationService) {
        this.instructorApplicationService = instructorApplicationService;
    }
    async submitApplication(createInstructorApplicationDto, user) {
        return this.instructorApplicationService.submitApplication(user.id, createInstructorApplicationDto);
    }
    async reviewApplication(id, status) {
        return this.instructorApplicationService.reviewApplication(id, status);
    }
    async getAllApplications() {
        return this.instructorApplicationService.getAllApplications();
    }
};
exports.InstructorApplicationController = InstructorApplicationController;
__decorate([
    (0, common_1.Post)('submit'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_instructor_application_dto_1.CreateInstructorApplicationDto, Object]),
    __metadata("design:returntype", Promise)
], InstructorApplicationController.prototype, "submitApplication", null);
__decorate([
    (0, common_1.Put)('review/:id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], InstructorApplicationController.prototype, "reviewApplication", null);
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InstructorApplicationController.prototype, "getAllApplications", null);
exports.InstructorApplicationController = InstructorApplicationController = __decorate([
    (0, common_1.Controller)('instructor-application'),
    __metadata("design:paramtypes", [instructor_application_service_1.InstructorApplicationService])
], InstructorApplicationController);
//# sourceMappingURL=instructor-application.controller.js.map