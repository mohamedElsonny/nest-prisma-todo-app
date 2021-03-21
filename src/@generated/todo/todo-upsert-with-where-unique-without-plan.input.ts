import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { TodoUpdateWithoutPlanInput } from './todo-update-without-plan.input';
import { TodoCreateWithoutPlanInput } from './todo-create-without-plan.input';

@InputType()
export class TodoUpsertWithWhereUniqueWithoutPlanInput {
  @Field(() => TodoWhereUniqueInput, { nullable: false })
  where!: TodoWhereUniqueInput;

  @Field(() => TodoUpdateWithoutPlanInput, { nullable: false })
  update!: TodoUpdateWithoutPlanInput;

  @Field(() => TodoCreateWithoutPlanInput, { nullable: false })
  create!: TodoCreateWithoutPlanInput;
}
