import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from './entities/roles.entity';
import { Profile } from './entities/user_profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Role,Profile])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
