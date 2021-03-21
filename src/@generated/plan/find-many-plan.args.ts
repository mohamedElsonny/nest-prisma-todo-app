import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlanWhereInput } from './plan-where.input';
import { PlanOrderByInput } from './plan-order-by.input';
import { PlanWhereUniqueInput } from './plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PlanScalarFieldEnum } from './plan-scalar-field.enum';

@ArgsType()
export class FindManyPlanArgs {
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

  @Field(() => [PlanScalarFieldEnum], { nullable: true })
  distinct?: Array<PlanScalarFieldEnum>;
}
