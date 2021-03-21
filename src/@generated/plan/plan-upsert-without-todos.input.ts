import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlanUpdateWithoutTodosInput } from './plan-update-without-todos.input';
import { PlanCreateWithoutTodosInput } from './plan-create-without-todos.input';

@InputType()
export class PlanUpsertWithoutTodosInput {
  @Field(() => PlanUpdateWithoutTodosInput, { nullable: false })
  update!: PlanUpdateWithoutTodosInput;

  @Field(() => PlanCreateWithoutTodosInput, { nullable: false })
  create!: PlanCreateWithoutTodosInput;
}
