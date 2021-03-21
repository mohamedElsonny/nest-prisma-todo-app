import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';

@ArgsType()
export class DeleteOneTodoArgs {
  @Field(() => TodoWhereUniqueInput, { nullable: false })
  where!: TodoWhereUniqueInput;
}
