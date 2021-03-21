import { Todo } from '@generated/todo/todo.model';
import { CreateOneTodoArgs } from '@generated/todo/create-one-todo.args';
import { FindManyTodoArgs } from '@generated/todo/find-many-todo.args';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Prisma } from '@prisma/client';

import { SelectedInfo } from '../decorators/SelectedInfo.decorator';

import { TodoService } from './todo.service';

@Resolver((of) => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query((returns) => [Todo], { name: 'todos' })
  getTodos(
    @Args() args: FindManyTodoArgs,
    @SelectedInfo() select: Prisma.TodoSelect,
  ) {
    return this.todoService.todos(args, select);
  }

  @Mutation((returns) => Todo, { name: 'createTodo' })
  createOneTodo(
    @Args() args: CreateOneTodoArgs,
    @SelectedInfo() select: Prisma.TodoSelect,
  ) {
    return this.todoService.createTodo(args, select);
  }
}
