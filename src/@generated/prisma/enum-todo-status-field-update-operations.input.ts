import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoStatus } from './todo-status.enum';

@InputType()
export class EnumTodoStatusFieldUpdateOperationsInput {
  @Field(() => TodoStatus, { nullable: true })
  set?: TodoStatus;
}
