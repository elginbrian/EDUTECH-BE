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
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const content_entity_1 = require("../content/entities/content.entity");
const user_entity_1 = require("../user/entities/user.entity");
const tag_entity_1 = require("../tag/entities/tag.entity");
let ContentService = class ContentService {
    constructor(contentRepository, userRepository, tagRepository) {
        this.contentRepository = contentRepository;
        this.userRepository = userRepository;
        this.tagRepository = tagRepository;
    }
    async uploadContent(instructorId, createContentDto) {
        const instructor = await this.userRepository.findOne({
            where: { id: instructorId },
        });
        const tag = await this.tagRepository.findOne({
            where: { id: createContentDto.tagId },
        });
        const content = new content_entity_1.Content();
        content.title = createContentDto.title;
        content.description = createContentDto.description;
        content.type = createContentDto.type;
        content.url = createContentDto.url;
        content.instructor = instructor;
        content.tag = tag;
        return await this.contentRepository.save(content);
    }
};
exports.ContentService = ContentService;
exports.ContentService = ContentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(content_entity_1.Content)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ContentService);
//# sourceMappingURL=content.service.js.map