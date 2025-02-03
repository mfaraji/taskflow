import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
