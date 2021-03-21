import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoStatus } from '../prisma/todo-status.enum';

@InputType()
export class TodoCreateWithoutPlanInput {
  @Field(() => String, { nullable: false })
  content!: string;

  @Field(() => String, { nullable: true })
  details?: string;

  @Field(() => TodoStatus, { nullable: true })
  status?: TodoStatus;

  @Field(() => Date, { nullable: true })
  duedate?: Date | string;
}
