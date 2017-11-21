import Component from '@ember/component';

import { argument } from '@ember-decorators/argument';
import { type } from '@ember-decorators/argument/type';

import { optional, Value } from 'ember-radio-bar/types';

export default class DemoContainerComponent extends Component {
  static positionalParams = ['title'];

  @argument
  @type('string')
  title;

  @argument
  @type(optional(Value))
  selected = null;

  @argument
  @type('string')
  name = this.elementId;
}
