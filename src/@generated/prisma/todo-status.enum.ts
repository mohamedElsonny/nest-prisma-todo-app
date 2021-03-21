import { registerEnumType } from '@nestjs/graphql';

export enum TodoStatus {
  Backlog = 'Backlog',
  Pending = 'Pending',
  InProgress = 'InProgress',
  Done = 'Done',
}

registerEnumType(TodoStatus, { name: 'TodoStatus' });
