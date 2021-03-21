import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

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
