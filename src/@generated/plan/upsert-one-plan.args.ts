import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanWhereUniqueInput } from './plan-where-unique.input';
import { PlanCreateInput } from './plan-create.input';
import { PlanUpdateInput } from './plan-update.input';

@ArgsType()
export class UpsertOnePlanArgs {
  @Field(() => PlanWhereUniqueInput, { nullable: false })
  where!: PlanWhereUniqueInput;

  @Field(() => PlanCreateInput, { nullable: false })
  create!: PlanCreateInput;

  @Field(() => PlanUpdateInput, { nullable: false })
  update!: PlanUpdateInput;
}
