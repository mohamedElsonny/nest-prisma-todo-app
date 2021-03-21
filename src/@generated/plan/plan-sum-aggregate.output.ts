import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PlanSumAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;
}
