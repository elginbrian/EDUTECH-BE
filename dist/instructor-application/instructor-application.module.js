"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructorApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const instructor_application_service_1 = require("./instructor-application.service");
const instructor_application_controller_1 = require("./instructor-application.controller");
const instructor_application_entity_1 = require("./entities/instructor-application.entity");
let InstructorApplicationModule = class InstructorApplicationModule {
};
exports.InstructorApplicationModule = InstructorApplicationModule;
exports.InstructorApplicationModule = InstructorApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([instructor_application_entity_1.InstructorApplication])],
        providers: [instructor_application_service_1.InstructorApplicationService],
        controllers: [instructor_application_controller_1.InstructorApplicationController],
    })
], InstructorApplicationModule);
//# sourceMappingURL=instructor-application.module.js.map