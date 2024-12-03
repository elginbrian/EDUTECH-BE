"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user/entities/user.entity");
const content_entity_1 = require("./content/entities/content.entity");
const instructor_application_entity_1 = require("./instructor-application/entities/instructor-application.entity");
const tag_entity_1 = require("./tag/entities/tag.entity");
const dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'edutech',
    entities: [user_entity_1.User, content_entity_1.Content, instructor_application_entity_1.InstructorApplication, tag_entity_1.Tag],
    migrations: ['dist/migrations/*.js'],
    synchronize: false,
});
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map