import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TodoCreateWithoutPlanInput } from './todo-create-without-plan.input';
import { TodoCreateOrConnectWithoutPlanInput } from './todo-create-or-connect-without-plan.input';
import { TodoUpsertWithWhereUniqueWithoutPlanInput } from './todo-upsert-with-where-unique-without-plan.input';
import { TodoWhereUniqueInput } from './todo-where-unique.input';
import { TodoUpdateWithWhereUniqueWithoutPlanInput } from './todo-update-with-where-unique-without-plan.input';
import { TodoUpdateManyWithWhereWithoutPlanInput } from './todo-update-many-with-where-without-plan.input';
import { TodoScalarWhereInput } from './todo-scalar-where.input';

@InputType()
export class TodoUpdateManyWithoutPlanInput {
  @Field(() => [TodoCreateWithoutPlanInput], { nullable: true })
  create?: Array<TodoCreateWithoutPlanInput>;

  @Field(() => [TodoCreateOrConnectWithoutPlanInput], { nullable: true })
  connectOrCreate?: Array<TodoCreateOrConnectWithoutPlanInput>;

  @Field(() => [TodoUpsertWithWhereUniqueWithoutPlanInput], { nullable: true })
  upsert?: Array<TodoUpsertWithWhereUniqueWithoutPlanInput>;

  @Field(() => [TodoWhereUniqueInput], { nullable: true })
  connect?: Array<TodoWhereUniqueInput>;

  @Field(() => [TodoWhereUniqueInput], { nullable: true })
  set?: Array<TodoWhereUniqueInput>;

  @Field(() => [TodoWhereUniqueInput], { nullable: true })
  disconnect?: Array<TodoWhereUniqueInput>;

  @Field(() => [TodoWhereUniqueInput], { nullable: true })
  delete?: Array<TodoWhereUniqueInput>;

  @Field(() => [TodoUpdateWithWhereUniqueWithoutPlanInput], { nullable: true })
  update?: Array<TodoUpdateWithWhereUniqueWithoutPlanInput>;

  @Field(() => [TodoUpdateManyWithWhereWithoutPlanInput], { nullable: true })
  updateMany?: Array<TodoUpdateManyWithWhereWithoutPlanInput>;

  @Field(() => [TodoScalarWhereInput], { nullable: true })
  deleteMany?: Array<TodoScalarWhereInput>;
}
