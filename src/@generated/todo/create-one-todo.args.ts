import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoCreateInput } from './todo-create.input';

@ArgsType()
export class CreateOneTodoArgs {
  @Field(() => TodoCreateInput, { nullable: false })
  data!: TodoCreateInput;
}
