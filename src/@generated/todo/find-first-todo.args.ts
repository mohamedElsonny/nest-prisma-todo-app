import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoWhereInput } from './todo-where.input';
import { TodoOrderByInput } from './todo-order-by.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TodoScalarFieldEnum } from './todo-scalar-field.enum';

@ArgsType()
export class FindFirstTodoArgs {
  @Field(() => TodoWhereInput, { nullable: true })
  where?: TodoWhereInput;

  @Field(() => [TodoOrderByInput], { nullable: true })
  orderBy?: Array<TodoOrderByInput>;

  @Field(() => TodoWhereUniqueInput, { nullable: true })
  cursor?: TodoWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [TodoScalarFieldEnum], { nullable: true })
  distinct?: Array<TodoScalarFieldEnum>;
}
