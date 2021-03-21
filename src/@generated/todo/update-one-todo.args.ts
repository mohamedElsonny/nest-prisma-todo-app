import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoUpdateInput } from './todo-update.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';

@ArgsType()
export class UpdateOneTodoArgs {
  @Field(() => TodoUpdateInput, { nullable: false })
  data!: TodoUpdateInput;

  @Field(() => TodoWhereUniqueInput, { nullable: false })
  where!: TodoWhereUniqueInput;
}
