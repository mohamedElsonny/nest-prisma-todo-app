import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanCreateInput } from './plan-create.input';

@ArgsType()
export class CreateOnePlanArgs {
  @Field(() => PlanCreateInput, { nullable: false })
  data!: PlanCreateInput;
}
