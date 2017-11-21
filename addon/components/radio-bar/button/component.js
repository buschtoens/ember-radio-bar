import Component from '@ember/component';

import { tagName } from 'ember-decorators/component';

import { argument } from '@ember-decorators/argument';
import { type } from '@ember-decorators/argument/type';
import { ClosureAction } from '@ember-decorators/argument/types';
import { required } from '@ember-decorators/argument/validation';

import { Value, ComponentDefinition, optional } from 'ember-radio-bar/types';

import layout from './template';
import styles from './styles';

@tagName('')
export default class RadioBarButtonComponent extends Component.extend({
  layout,
  styles
}) {
  static positionalParams = ['value'];

  @argument
  @type(Value)
  @required
  value;

  @argument
  @type(optional(Value))
  @required
  selected;

  @argument
  @type(ClosureAction)
  @required
  update;

  @argument
  @type('string')
  @required
  name;

  @argument
  @type(optional('string'))
  label;

  @argument
  @type(optional('string'))
  icon;

  @argument
  @type(optional(ComponentDefinition))
  iconComponent;

  @argument
  @type('number')
  tabindex = 0;
}
