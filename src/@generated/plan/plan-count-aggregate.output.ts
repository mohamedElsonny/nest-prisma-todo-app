import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlanCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: true })
  title?: number;

  @Field(() => Int, { nullable: true })
  description?: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
