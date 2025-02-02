import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersService, AuthService, AuthResolver, UsersResolver]
})
export class UsersModule {}
