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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_repository_1 = require("../user/user.repository");
const hash_util_1 = require("../common/utils/hash.util");
const user_service_1 = require("src/user/user.service");
let AuthService = class AuthService {
    constructor(userRepository, userService, jwtService) {
        this.userRepository = userRepository;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register(registerDto) {
        const { email, password } = registerDto;
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new common_1.UnauthorizedException('Email already registered.');
        }
        const hashedPassword = await (0, hash_util_1.hashPassword)(password);
        await this.userRepository.createUser({
            email,
            password: hashedPassword,
        });
        return { message: 'User registered successfully.' };
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials.');
        }
        const isPasswordValid = await (0, hash_util_1.comparePassword)(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials.');
        }
        const payload = { sub: user.id, email: user.email, role: user.role };
        const accessToken = this.jwtService.sign(payload);
        return { accessToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map