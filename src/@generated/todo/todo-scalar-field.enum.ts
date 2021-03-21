import { registerEnumType } from '@nestjs/graphql';

export enum TodoScalarFieldEnum {
  id = 'id',
  content = 'content',
  details = 'details',
  status = 'status',
  duedate = 'duedate',
  planId = 'planId',
}

registerEnumType(TodoScalarFieldEnum, { name: 'TodoScalarFieldEnum' });
