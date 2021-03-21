import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TodoOrderByInput {
  @Field(() => SortOrder, { nullable: true })
  id?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  content?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  details?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  duedate?: SortOrder;

  @Field(() => SortOrder, { nullable: true })
  planId?: SortOrder;
}
