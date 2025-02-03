import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { create } from 'domain';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signUp({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name?: string;
  }) {
    const existingUser = await this.userService.getUser({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }
    const passwordHash = bcrypt.hashSync(password, 10);
    const user = await this.userService.createUser({
      email,
      password: passwordHash,
      name,
    });
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
  async signIn(
    email: string,
    password: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.userService.getUser({ email });
    if (user && bcrypt.compare(password, user.password)) {
      return this.generateJwtToken(user);
    }
    throw new UnauthorizedException();
  }

  async generateJwtToken(user: User) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return { accessToken: await this.jwtService.signAsync(payload) };
  }
}
