import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoStatus } from './todo-status.enum';

@InputType()
export class NestedEnumTodoStatusFilter {
  @Field(() => TodoStatus, { nullable: true })
  equals?: TodoStatus;

  @Field(() => [TodoStatus], { nullable: true })
  in?: Array<TodoStatus>;

  @Field(() => [TodoStatus], { nullable: true })
  notIn?: Array<TodoStatus>;

  @Field(() => NestedEnumTodoStatusFilter, { nullable: true })
  not?: NestedEnumTodoStatusFilter;
}
