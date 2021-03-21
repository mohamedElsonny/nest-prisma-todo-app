import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { getFields, getSelect } from 'helpers/generateSelect';

export const SelectedInfo = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const context = GqlExecutionContext.create(ctx);
    const info = context.getInfo();

    const { gqlFields, isAggregate } = getFields(info);
    const infoFeilds = getSelect(gqlFields, isAggregate);
    return infoFeilds.select;
  },
);
