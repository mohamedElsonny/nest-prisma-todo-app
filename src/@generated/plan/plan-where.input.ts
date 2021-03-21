import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { TodoListRelationFilter } from '../todo/todo-list-relation-filter.input';

@InputType()
export class PlanWhereInput {
  @Field(() => [PlanWhereInput], { nullable: true })
  AND?: Array<PlanWhereInput>;

  @Field(() => [PlanWhereInput], { nullable: true })
  OR?: Array<PlanWhereInput>;

  @Field(() => [PlanWhereInput], { nullable: true })
  NOT?: Array<PlanWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  title?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter;

  @Field(() => TodoListRelationFilter, { nullable: true })
  todos?: TodoListRelationFilter;
}
