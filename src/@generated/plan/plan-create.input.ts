import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoCreateNestedManyWithoutPlanInput } from '../todo/todo-create-nested-many-without-plan.input';

@InputType()
export class PlanCreateInput {
  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => TodoCreateNestedManyWithoutPlanInput, { nullable: true })
  todos?: TodoCreateNestedManyWithoutPlanInput;
}
