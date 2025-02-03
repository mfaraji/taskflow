import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/signUp.dto';
import { UserDto } from '../users/dtos/user.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => UserDto)
  signUp(@Args('signUpInput') signUpInput: SignUpDto) {
    return this.authService.signUp({
      email: signUpInput.email,
      password: signUpInput.password,
      name: signUpInput.name,
    });
  }

  @Mutation(() => String)
  async signIn(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const { accessToken } = await this.authService.signIn(email, password);
    return accessToken;
  }
}
