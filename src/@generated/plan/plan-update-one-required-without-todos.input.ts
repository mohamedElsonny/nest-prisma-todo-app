import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanCreateWithoutTodosInput } from './plan-create-without-todos.input';
import { PlanCreateOrConnectWithoutTodosInput } from './plan-create-or-connect-without-todos.input';
import { PlanUpsertWithoutTodosInput } from './plan-upsert-without-todos.input';
import { PlanWhereUniqueInput } from './plan-where-unique.input';
import { PlanUpdateWithoutTodosInput } from './plan-update-without-todos.input';

@InputType()
export class PlanUpdateOneRequiredWithoutTodosInput {
  @Field(() => PlanCreateWithoutTodosInput, { nullable: true })
  create?: PlanCreateWithoutTodosInput;

  @Field(() => PlanCreateOrConnectWithoutTodosInput, { nullable: true })
  connectOrCreate?: PlanCreateOrConnectWithoutTodosInput;

  @Field(() => PlanUpsertWithoutTodosInput, { nullable: true })
  upsert?: PlanUpsertWithoutTodosInput;

  @Field(() => PlanWhereUniqueInput, { nullable: true })
  connect?: PlanWhereUniqueInput;

  @Field(() => PlanUpdateWithoutTodosInput, { nullable: true })
  update?: PlanUpdateWithoutTodosInput;
}
