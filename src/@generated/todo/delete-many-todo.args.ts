import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoWhereInput } from './todo-where.input';

@ArgsType()
export class DeleteManyTodoArgs {
  @Field(() => TodoWhereInput, { nullable: true })
  where?: TodoWhereInput;
}
