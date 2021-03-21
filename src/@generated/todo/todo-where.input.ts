import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumTodoStatusFilter } from '../prisma/enum-todo-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PlanRelationFilter } from '../plan/plan-relation-filter.input';

@InputType()
export class TodoWhereInput {
  @Field(() => [TodoWhereInput], { nullable: true })
  AND?: Array<TodoWhereInput>;

  @Field(() => [TodoWhereInput], { nullable: true })
  OR?: Array<TodoWhereInput>;

  @Field(() => [TodoWhereInput], { nullable: true })
  NOT?: Array<TodoWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  content?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  details?: StringNullableFilter;

  @Field(() => EnumTodoStatusFilter, { nullable: true })
  status?: EnumTodoStatusFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  duedate?: DateTimeFilter;

  @Field(() => PlanRelationFilter, { nullable: true })
  plan?: PlanRelationFilter;

  @Field(() => IntFilter, { nullable: true })
  planId?: IntFilter;
}
