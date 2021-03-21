import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { TodoUpdateManyWithoutPlanInput } from '../todo/todo-update-many-without-plan.input';

@InputType()
export class PlanUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;

  @Field(() => TodoUpdateManyWithoutPlanInput, { nullable: true })
  todos?: TodoUpdateManyWithoutPlanInput;
}
