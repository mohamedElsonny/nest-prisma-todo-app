import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PlanCountAggregate } from './plan-count-aggregate.output';
import { PlanAvgAggregate } from './plan-avg-aggregate.output';
import { PlanSumAggregate } from './plan-sum-aggregate.output';
import { PlanMinAggregate } from './plan-min-aggregate.output';
import { PlanMaxAggregate } from './plan-max-aggregate.output';

@ObjectType()
export class AggregatePlan {
  @Field(() => PlanCountAggregate, { nullable: true })
  count?: PlanCountAggregate;

  @Field(() => PlanAvgAggregate, { nullable: true })
  avg?: PlanAvgAggregate;

  @Field(() => PlanSumAggregate, { nullable: true })
  sum?: PlanSumAggregate;

  @Field(() => PlanMinAggregate, { nullable: true })
  min?: PlanMinAggregate;

  @Field(() => PlanMaxAggregate, { nullable: true })
  max?: PlanMaxAggregate;
}
