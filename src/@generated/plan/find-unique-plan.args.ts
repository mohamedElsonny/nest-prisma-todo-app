import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanWhereUniqueInput } from './plan-where-unique.input';

@ArgsType()
export class FindUniquePlanArgs {
  @Field(() => PlanWhereUniqueInput, { nullable: false })
  where!: PlanWhereUniqueInput;
}
