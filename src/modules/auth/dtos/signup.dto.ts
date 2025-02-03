import { InputType, Field } from '@nestjs/graphql';
import { MinLength, IsEmail, IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class SignUpDto {
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @Field()
  @IsString()
  name: string;
}
