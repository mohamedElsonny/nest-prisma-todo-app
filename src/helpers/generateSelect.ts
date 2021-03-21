import * as graphqlFields from 'graphql-fields';

const availableArgs = ['where', 'orderBy', 'skip', 'cursor', 'take'];

export function getFields(info: any) {
  const returnType = info.returnType
    .toString()
    .replace(/]/g, '')
    .replace(/\[/g, '')
    .replace(/!/g, '');

  const isAggregate = returnType.includes('Aggregate');

  const gqlFields = graphqlFields(
    info,
    {},
    {
      excludedFields: ['__typename'],
      processArguments: true,
    },
  );
  return {
    isAggregate,
    gqlFields,
  };
}

export function getSelect(fields: any, isAggregate: boolean) {
  const selectObject: any = isAggregate ? {} : { select: {} };
  Object.keys(fields).forEach((key) => {
    if (Object.keys(fields[key]).length === 0) {
      if (isAggregate) {
        selectObject[key] = true;
      } else {
        selectObject.select[key] = true;
      }
    } else if (key === '__arguments') {
      fields[key].forEach((arg: any) => {
        Object.keys(arg).forEach((key2) => {
          if (availableArgs.includes(key2)) {
            selectObject[key2] = arg[key2].value;
          }
        });
      });
    } else {
      if (isAggregate) {
        selectObject[key] = getSelect(fields[key], isAggregate);
      } else {
        selectObject.select[key] = getSelect(fields[key], isAggregate);
      }
    }
  });
  return selectObject;
}
