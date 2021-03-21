import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { TodoCreateWithoutPlanInput } from './todo-create-without-plan.input';

@InputType()
export class TodoCreateOrConnectWithoutPlanInput {
  @Field(() => TodoWhereUniqueInput, { nullable: false })
  where!: TodoWhereUniqueInput;

  @Field(() => TodoCreateWithoutPlanInput, { nullable: false })
  create!: TodoCreateWithoutPlanInput;
}
