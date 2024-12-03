import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '../auth/jwt.payload';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: JwtPayload): Promise<{
        userId: string;
        username: string;
    }>;
}
export {};
