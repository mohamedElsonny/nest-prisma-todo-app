import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { TodoStatus } from '../prisma/todo-status.enum';
import { Plan } from '../plan/plan.model';

@ObjectType()
export class Todo {
  @Field(() => ID, {
    nullable: false,
  })
  id!: number;

  @Field(() => String, {
    nullable: false,
  })
  content!: string;

  @Field(() => String, {
    nullable: true,
  })
  details?: string;

  @Field(() => TodoStatus, {
    nullable: false,
    defaultValue: 'Backlog',
  })
  status!: TodoStatus;

  @Field(() => Date, {
    nullable: false,
  })
  duedate!: Date | string;

  @Field(() => Plan, {
    nullable: false,
  })
  plan!: Plan;

  @Field(() => Int, {
    nullable: false,
  })
  planId!: number;
}
