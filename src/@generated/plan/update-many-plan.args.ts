import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanUpdateManyMutationInput } from './plan-update-many-mutation.input';
import { PlanWhereInput } from './plan-where.input';

@ArgsType()
export class UpdateManyPlanArgs {
  @Field(() => PlanUpdateManyMutationInput, { nullable: false })
  data!: PlanUpdateManyMutationInput;

  @Field(() => PlanWhereInput, { nullable: true })
  where?: PlanWhereInput;
}
