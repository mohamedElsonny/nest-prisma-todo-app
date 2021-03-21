import { Plan } from '@generated/plan/plan.model';
import { FindManyPlanArgs } from '@generated/plan/find-many-plan.args';
import { CreateOnePlanArgs } from '@generated/plan/create-one-plan.args';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Prisma } from '@prisma/client';

import { SelectedInfo } from 'decorators/SelectedInfo.decorator';

import { PlanService } from './plan.service';

@Resolver((of) => Plan)
export class PlanResolver {
  constructor(private readonly planService: PlanService) {}

  @Query((returns) => [Plan], { name: 'plans' })
  getPlans(
    @Args() args: FindManyPlanArgs,
    @SelectedInfo() select: Prisma.PlanSelect,
  ) {
    return this.planService.plans(args, select);
  }

  @Mutation((returns) => Plan, { name: 'createPlan' })
  createOnePlan(
    @Args() args: CreateOnePlanArgs,
    @SelectedInfo() select: Prisma.PlanSelect,
  ) {
    return this.planService.createPlan(args, select);
  }
}
