import { Module } from '@nestjs/common';

import { PrismaService } from 'prisma.service';

import { PlanResolver } from './plan.resolver';
import { PlanService } from './plan.service';

@Module({
  providers: [PrismaService, PlanService, PlanResolver],
})
export class PlanModule {}
