import {
  shapeOf as _shapeOf,
  unionOf as _unionOf
} from '@ember-decorators/argument/type';

const shapeOf = shape => _shapeOf(shape);
const unionOf = (...types) => _unionOf(...types);

export const optional = type => unionOf(type, undefined, null);

export const Value = unionOf('string', 'number', 'boolean', 'object');

export const Option = shapeOf({ label: 'string', value: Value });

export const ComponentDefinition = unionOf('string', 'object');
