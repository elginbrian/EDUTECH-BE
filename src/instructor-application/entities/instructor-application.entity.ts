import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity('instructor_applications')
export class InstructorApplication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  ktpDocument: string;

  @Column({ type: 'text' })
  cvDocument: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  })
  status: 'pending' | 'approved' | 'rejected';

  @ManyToOne(() => User, (user) => user.applications)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
