import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoWhereInput } from './todo-where.input';

@InputType()
export class TodoListRelationFilter {
  @Field(() => TodoWhereInput, { nullable: true })
  every?: TodoWhereInput;

  @Field(() => TodoWhereInput, { nullable: true })
  some?: TodoWhereInput;

  @Field(() => TodoWhereInput, { nullable: true })
  none?: TodoWhereInput;
}
