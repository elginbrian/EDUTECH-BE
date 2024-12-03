import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { Content } from './content/entities/content.entity';
import { InstructorApplication } from './instructor-application/entities/instructor-application.entity';
import { Tag } from './tag/entities/tag.entity';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'edutech',
  entities: [User, Content, InstructorApplication, Tag],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
});

export default dataSource;
