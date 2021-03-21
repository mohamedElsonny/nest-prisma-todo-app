import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanWhereUniqueInput } from './plan-where-unique.input';
import { PlanCreateWithoutTodosInput } from './plan-create-without-todos.input';

@InputType()
export class PlanCreateOrConnectWithoutTodosInput {
  @Field(() => PlanWhereUniqueInput, { nullable: false })
  where!: PlanWhereUniqueInput;

  @Field(() => PlanCreateWithoutTodosInput, { nullable: false })
  create!: PlanCreateWithoutTodosInput;
}
