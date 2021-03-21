import { PrismaService } from 'prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { CreateOnePlanArgs } from '@generated/plan/create-one-plan.args';
import { FindUniquePlanArgs } from '@generated/plan/find-unique-plan.args';
import { FindManyPlanArgs } from '@generated/plan/find-many-plan.args';

@Injectable()
export class PlanService {
  constructor(private readonly prisma: PrismaService) {}

  plans(args: FindManyPlanArgs, select: Prisma.PlanSelect) {
    return this.prisma.plan.findMany({ ...args, select });
  }

  plan(args: FindUniquePlanArgs, select: Prisma.PlanSelect) {
    return this.prisma.plan.findUnique({ ...args, select });
  }

  createPlan(args: CreateOnePlanArgs, select: Prisma.PlanSelect) {
    return this.prisma.plan.create({ ...args, select });
  }
}
