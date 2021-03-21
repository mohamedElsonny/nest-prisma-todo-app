import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanWhereInput } from './plan-where.input';
import { PlanOrderByInput } from './plan-order-by.input';
import { PlanWhereUniqueInput } from './plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlanCountAggregateInput } from './plan-count-aggregate.input';
import { PlanAvgAggregateInput } from './plan-avg-aggregate.input';
import { PlanSumAggregateInput } from './plan-sum-aggregate.input';
import { PlanMinAggregateInput } from './plan-min-aggregate.input';
import { PlanMaxAggregateInput } from './plan-max-aggregate.input';

@ArgsType()
export class AggregatePlanArgs {
  @Field(() => PlanWhereInput, { nullable: true })
  where?: PlanWhereInput;

  @Field(() => [PlanOrderByInput], { nullable: true })
  orderBy?: Array<PlanOrderByInput>;

  @Field(() => PlanWhereUniqueInput, { nullable: true })
  cursor?: PlanWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => PlanCountAggregateInput, { nullable: true })
  count?: PlanCountAggregateInput;

  @Field(() => PlanAvgAggregateInput, { nullable: true })
  avg?: PlanAvgAggregateInput;

  @Field(() => PlanSumAggregateInput, { nullable: true })
  sum?: PlanSumAggregateInput;

  @Field(() => PlanMinAggregateInput, { nullable: true })
  min?: PlanMinAggregateInput;

  @Field(() => PlanMaxAggregateInput, { nullable: true })
  max?: PlanMaxAggregateInput;
}
