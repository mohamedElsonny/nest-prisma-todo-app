import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoCreateWithoutPlanInput } from './todo-create-without-plan.input';
import { TodoCreateOrConnectWithoutPlanInput } from './todo-create-or-connect-without-plan.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';

@InputType()
export class TodoUncheckedCreateNestedManyWithoutPlanInput {
  @Field(() => [TodoCreateWithoutPlanInput], { nullable: true })
  create?: Array<TodoCreateWithoutPlanInput>;

  @Field(() => [TodoCreateOrConnectWithoutPlanInput], { nullable: true })
  connectOrCreate?: Array<TodoCreateOrConnectWithoutPlanInput>;

  @Field(() => [TodoWhereUniqueInput], { nullable: true })
  connect?: Array<TodoWhereUniqueInput>;
}
