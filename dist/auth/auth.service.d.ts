import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/user.repository';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly userRepository;
    private readonly userService;
    private readonly jwtService;
    constructor(userRepository: UserRepository, userService: UserService, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
}
