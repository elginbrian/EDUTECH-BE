import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { JwtService } from '@nestjs/jwt';
import { User } from './user/entities/user.entity';
import { Content } from './content/entities/content.entity';
import { InstructorApplication } from './instructor-application/entities/instructor-application.entity';
import { Tag } from './tag/entities/tag.entity';
import { ContentModule } from './content/content.module';
import { InstructorApplicationModule } from './instructor-application/instructor-application.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'edutech',
      entities: [User, Content, InstructorApplication, Tag],
      synchronize: true,
    }),

    AuthModule,
    UserModule,
    TagModule,
    ContentModule,
    InstructorApplicationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
