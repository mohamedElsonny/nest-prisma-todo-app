import { ExecutionContext, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GqlExecutionContext, GraphQLModule } from '@nestjs/graphql';

import { getFields, getSelect } from 'helpers/generateSelect';

import { PrismaService } from './prisma.service';

import { PlanModule } from './plan/plan.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    PlanModule,
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
