import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user-dto';
import { UpdateUserDto } from '../user/dto/update-user-dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
    findAll(): Promise<User[]>;
    findOneById(id: string): Promise<User | undefined>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<void>;
}
