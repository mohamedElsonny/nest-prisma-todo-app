import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanWhereInput } from './plan-where.input';

@ArgsType()
export class DeleteManyPlanArgs {
  @Field(() => PlanWhereInput, { nullable: true })
  where?: PlanWhereInput;
}
