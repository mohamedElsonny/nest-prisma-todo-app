import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoUpdateManyMutationInput } from './todo-update-many-mutation.input';
import { TodoWhereInput } from './todo-where.input';

@ArgsType()
export class UpdateManyTodoArgs {
  @Field(() => TodoUpdateManyMutationInput, { nullable: false })
  data!: TodoUpdateManyMutationInput;

  @Field(() => TodoWhereInput, { nullable: true })
  where?: TodoWhereInput;
}
