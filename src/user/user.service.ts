import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user-dto';
import { UpdateUserDto } from '../user/dto/update-user-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...userData } = createUserDto;

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.userRepository.create({
      ...userData,
      password: hashedPassword,
    });

    return await this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  async findOneById(id: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOneById(id);

    if (!user) {
      throw new Error('User not found');
    }

    Object.assign(user, updateUserDto);

    return this.userRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOneById(id);

    if (!user) {
      throw new Error('User not found');
    }

    await this.userRepository.delete(id);
  }
}
