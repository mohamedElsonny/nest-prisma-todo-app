import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanUpdateInput } from './plan-update.input';
import { PlanWhereUniqueInput } from './plan-where-unique.input';

@ArgsType()
export class UpdateOnePlanArgs {
  @Field(() => PlanUpdateInput, { nullable: false })
  data!: PlanUpdateInput;

  @Field(() => PlanWhereUniqueInput, { nullable: false })
  where!: PlanWhereUniqueInput;
}
