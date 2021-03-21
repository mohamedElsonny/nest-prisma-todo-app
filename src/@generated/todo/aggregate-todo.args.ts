import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodoWhereInput } from './todo-where.input';
import { TodoOrderByInput } from './todo-order-by.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TodoCountAggregateInput } from './todo-count-aggregate.input';
import { TodoAvgAggregateInput } from './todo-avg-aggregate.input';
import { TodoSumAggregateInput } from './todo-sum-aggregate.input';
import { TodoMinAggregateInput } from './todo-min-aggregate.input';
import { TodoMaxAggregateInput } from './todo-max-aggregate.input';

@ArgsType()
export class AggregateTodoArgs {
  @Field(() => TodoWhereInput, { nullable: true })
  where?: TodoWhereInput;

  @Field(() => [TodoOrderByInput], { nullable: true })
  orderBy?: Array<TodoOrderByInput>;

  @Field(() => TodoWhereUniqueInput, { nullable: true })
  cursor?: TodoWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => TodoCountAggregateInput, { nullable: true })
  count?: TodoCountAggregateInput;

  @Field(() => TodoAvgAggregateInput, { nullable: true })
  avg?: TodoAvgAggregateInput;

  @Field(() => TodoSumAggregateInput, { nullable: true })
  sum?: TodoSumAggregateInput;

  @Field(() => TodoMinAggregateInput, { nullable: true })
  min?: TodoMinAggregateInput;

  @Field(() => TodoMaxAggregateInput, { nullable: true })
  max?: TodoMaxAggregateInput;
}
