import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TodoUncheckedCreateNestedManyWithoutPlanInput } from '../todo/todo-unchecked-create-nested-many-without-plan.input';

@InputType()
export class PlanUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => TodoUncheckedCreateNestedManyWithoutPlanInput, {
    nullable: true,
  })
  todos?: TodoUncheckedCreateNestedManyWithoutPlanInput;
}
