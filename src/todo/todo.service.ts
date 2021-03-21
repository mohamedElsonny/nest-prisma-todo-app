import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { Prisma } from '@prisma/client';

import { CreateOneTodoArgs } from '@generated/todo/create-one-todo.args';
import { FindManyTodoArgs } from '@generated/todo/find-many-todo.args';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  todos(args: FindManyTodoArgs, select: Prisma.TodoSelect) {
    return this.prisma.todo.findMany({ ...args, select });
  }
  createTodo(args: CreateOneTodoArgs, select: Prisma.TodoSelect) {
    return this.prisma.todo.create({ ...args, select });
  }
}
