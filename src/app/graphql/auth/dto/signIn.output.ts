import { IsNotEmpty, IsString } from 'class-validator';
import { Field, ObjectType } from 'type-graphql';
import { GraphQLBaseResponse } from '../../common/dto/graphqlBase.response.js';

@ObjectType()
export class SignInOutput extends GraphQLBaseResponse {
  @Field(() => Body, { nullable: false })
  body!: Body;
}

@ObjectType()
class Body {
  @IsNotEmpty()
  @IsString()
  @Field(() => String, { nullable: false })
  accessToken!: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String, { nullable: false })
  refreshToken!: string;
}
