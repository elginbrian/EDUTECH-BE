import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { InstructorApplication } from '../../instructor-application/entities/instructor-application.entity';
import { Content } from 'src/content/entities/content.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string;

  @OneToMany(() => InstructorApplication, (application) => application.user)
  applications: InstructorApplication[];

  @OneToMany(() => Content, (content) => content.instructor)
  content: Content[];
}
