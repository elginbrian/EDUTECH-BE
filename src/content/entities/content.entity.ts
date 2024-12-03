import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Tag } from '../../tag/entities/tag.entity';

@Entity('content')
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: ['video', 'text', 'audio'] })
  type: 'video' | 'text' | 'audio';

  @Column()
  url: string;

  @ManyToOne(() => User, (user) => user.content)
  @JoinColumn({ name: 'instructor_id' })
  instructor: User;

  @ManyToOne(() => Tag, (tag) => tag.content)
  @JoinColumn({ name: 'tag_id' })
  tag: Tag;
}
