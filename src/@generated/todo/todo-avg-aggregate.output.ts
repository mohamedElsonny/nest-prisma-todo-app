import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TodoAvgAggregate {
  @Field(() => Float, { nullable: false })
  id!: number;

  @Field(() => Float, { nullable: false })
  planId!: number;
}
