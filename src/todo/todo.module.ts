import { Module } from '@nestjs/common';

import { PrismaService } from 'prisma.service';

import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';

@Module({
  providers: [PrismaService, TodoService, TodoResolver],
})
export class TodoModule {}
