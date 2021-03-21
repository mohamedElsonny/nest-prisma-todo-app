import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { TodoUpdateWithoutPlanInput } from './todo-update-without-plan.input';

@InputType()
export class TodoUpdateWithWhereUniqueWithoutPlanInput {
  @Field(() => TodoWhereUniqueInput, { nullable: false })
  where!: TodoWhereUniqueInput;

  @Field(() => TodoUpdateWithoutPlanInput, { nullable: false })
  data!: TodoUpdateWithoutPlanInput;
}
