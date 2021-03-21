import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TodoStatus } from '../prisma/todo-status.enum';

@ObjectType()
export class TodoMinAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => String, { nullable: true })
  details?: string;

  @Field(() => TodoStatus, { nullable: true })
  status?: TodoStatus;

  @Field(() => Date, { nullable: true })
  duedate?: Date | string;

  @Field(() => Int, { nullable: false })
  planId!: number;
}
