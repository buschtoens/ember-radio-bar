import { shapeOf, unionOf } from '@ember-decorators/argument/type';

export const optional = type => unionOf(type, undefined, null);

export const Value = unionOf('string', 'number', 'boolean', 'object');

export const Option = shapeOf({ label: 'string', value: Value });

export const ComponentDefinition = unionOf('string', 'object');
