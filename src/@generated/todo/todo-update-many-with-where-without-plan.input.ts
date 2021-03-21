import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoScalarWhereInput } from './todo-scalar-where.input';
import { TodoUpdateManyMutationInput } from './todo-update-many-mutation.input';

@InputType()
export class TodoUpdateManyWithWhereWithoutPlanInput {
  @Field(() => TodoScalarWhereInput, { nullable: false })
  where!: TodoScalarWhereInput;

  @Field(() => TodoUpdateManyMutationInput, { nullable: false })
  data!: TodoUpdateManyMutationInput;
}
