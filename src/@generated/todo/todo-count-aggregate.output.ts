import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TodoCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: true })
  content?: number;

  @Field(() => Int, { nullable: true })
  details?: number;

  @Field(() => Int, { nullable: true })
  status?: number;

  @Field(() => Int, { nullable: true })
  duedate?: number;

  @Field(() => Int, { nullable: false })
  planId!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
