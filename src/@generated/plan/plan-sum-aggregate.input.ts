import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PlanSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;
}
