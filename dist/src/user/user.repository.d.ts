import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserRepository {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    findByEmail(email: string): Promise<User | undefined>;
    createUser(user: Partial<User>): Promise<User>;
}
