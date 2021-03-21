import { registerEnumType } from '@nestjs/graphql';

export enum PlanScalarFieldEnum {
  id = 'id',
  title = 'title',
  description = 'description',
}

registerEnumType(PlanScalarFieldEnum, { name: 'PlanScalarFieldEnum' });
