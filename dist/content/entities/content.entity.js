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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entities/user.entity");
const tag_entity_1 = require("../../tag/entities/tag.entity");
let Content = class Content {
};
exports.Content = Content;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Content.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Content.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Content.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['video', 'text', 'audio'] }),
    __metadata("design:type", String)
], Content.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Content.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.content),
    (0, typeorm_1.JoinColumn)({ name: 'instructor_id' }),
    __metadata("design:type", user_entity_1.User)
], Content.prototype, "instructor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tag_entity_1.Tag, (tag) => tag.content),
    (0, typeorm_1.JoinColumn)({ name: 'tag_id' }),
    __metadata("design:type", tag_entity_1.Tag)
], Content.prototype, "tag", void 0);
exports.Content = Content = __decorate([
    (0, typeorm_1.Entity)('content')
], Content);
//# sourceMappingURL=content.entity.js.map