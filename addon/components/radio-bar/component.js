import Component from '@ember/component';

import appConfig from 'ember-get-config';

// import { tagName } from 'ember-decorators/component';

import { argument } from '@ember-decorators/argument';
import { type, arrayOf } from '@ember-decorators/argument/type';
import { ClosureAction } from '@ember-decorators/argument/types';
import { required } from '@ember-decorators/argument/validation';

import {
  Value,
  Option,
  ComponentDefinition,
  optional
} from 'ember-radio-bar/types';

import layout from './template';
import styles from './styles';

const { 'ember-radio-bar': config = {} } = appConfig;

// @tagName('fieldset')
export default class RadioBarComponent extends Component.extend({
  layout,
  styles,

  localClassNames: 'radio-bar'
}) {
  static positionalParams = ['selected', 'options'];

  @argument
  @type(optional(Value))
  @required
  selected = null;

  @argument
  @type(optional(arrayOf(Option)))
  options;

  @argument
  @type(ClosureAction)
  @required
  update;

  @argument
  @type('string')
  @required
  name = this.elementId;

  @argument
  @type(ComponentDefinition)
  iconComponent = config.iconComponent;
}
