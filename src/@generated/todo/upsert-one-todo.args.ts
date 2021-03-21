import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { TodoCreateInput } from './todo-create.input';
import { TodoUpdateInput } from './todo-update.input';

@ArgsType()
export class UpsertOneTodoArgs {
  @Field(() => TodoWhereUniqueInput, { nullable: false })
  where!: TodoWhereUniqueInput;

  @Field(() => TodoCreateInput, { nullable: false })
  create!: TodoCreateInput;

  @Field(() => TodoUpdateInput, { nullable: false })
  update!: TodoUpdateInput;
}
