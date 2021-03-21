import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Todo } from '../todo/todo.model';

@ObjectType()
export class Plan {
  @Field(() => ID, {
    nullable: false,
  })
  id!: number;

  @Field(() => String, {
    nullable: false,
  })
  title!: string;

  @Field(() => String, {
    nullable: true,
  })
  description?: string;

  @Field(() => [Todo], {
    nullable: true,
  })
  todos?: Array<Todo>;
}
