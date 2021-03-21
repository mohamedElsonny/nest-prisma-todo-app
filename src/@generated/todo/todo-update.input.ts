import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumTodoStatusFieldUpdateOperationsInput } from '../prisma/enum-todo-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PlanUpdateOneRequiredWithoutTodosInput } from '../plan/plan-update-one-required-without-todos.input';

@InputType()
export class TodoUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  content?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  details?: NullableStringFieldUpdateOperationsInput;

  @Field(() => EnumTodoStatusFieldUpdateOperationsInput, { nullable: true })
  status?: EnumTodoStatusFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  duedate?: DateTimeFieldUpdateOperationsInput;

  @Field(() => PlanUpdateOneRequiredWithoutTodosInput, { nullable: true })
  plan?: PlanUpdateOneRequiredWithoutTodosInput;
}
