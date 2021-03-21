import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanCreateWithoutTodosInput } from './plan-create-without-todos.input';
import { PlanCreateOrConnectWithoutTodosInput } from './plan-create-or-connect-without-todos.input';
import { PlanWhereUniqueInput } from './plan-where-unique.input';

@InputType()
export class PlanCreateNestedOneWithoutTodosInput {
  @Field(() => PlanCreateWithoutTodosInput, { nullable: true })
  create?: PlanCreateWithoutTodosInput;

  @Field(() => PlanCreateOrConnectWithoutTodosInput, { nullable: true })
  connectOrCreate?: PlanCreateOrConnectWithoutTodosInput;

  @Field(() => PlanWhereUniqueInput, { nullable: true })
  connect?: PlanWhereUniqueInput;
}
