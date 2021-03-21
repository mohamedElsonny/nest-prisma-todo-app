import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoStatus } from './todo-status.enum';
import { NestedEnumTodoStatusFilter } from './nested-enum-todo-status-filter.input';

@InputType()
export class EnumTodoStatusFilter {
  @Field(() => TodoStatus, { nullable: true })
  equals?: TodoStatus;

  @Field(() => [TodoStatus], { nullable: true })
  in?: Array<TodoStatus>;

  @Field(() => [TodoStatus], { nullable: true })
  notIn?: Array<TodoStatus>;

  @Field(() => NestedEnumTodoStatusFilter, { nullable: true })
  not?: NestedEnumTodoStatusFilter;
}
