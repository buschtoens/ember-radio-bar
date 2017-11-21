# ember-radio-bar

[![Build Status](https://travis-ci.org/buschtoens/ember-radio-bar.svg)](https://travis-ci.org/buschtoens/ember-radio-bar)
[![npm version](https://badge.fury.io/js/ember-radio-bar.svg)](http://badge.fury.io/js/ember-radio-bar)
[![Download Total](https://img.shields.io/npm/dt/ember-radio-bar.svg)](http://badge.fury.io/js/ember-radio-bar)
[![Ember Observer Score](https://emberobserver.com/badges/ember-radio-bar.svg)](https://emberobserver.com/addons/ember-radio-bar)
[![Greenkeeper badge](https://badges.greenkeeper.io/buschtoens/ember-radio-bar.svg)](https://greenkeeper.io/)
[![dependencies Status](https://david-dm.org/buschtoens/ember-radio-bar/status.svg)](https://david-dm.org/buschtoens/ember-radio-bar)
[![devDependencies Status](https://david-dm.org/buschtoens/ember-radio-bar/dev-status.svg)](https://david-dm.org/buschtoens/ember-radio-bar?type=dev)

## Installation

```
ember install ember-radio-bar
```

## Usage

### With `options` array

```hbs
{{radio-bar selected
  (array
    (hash value="rocket"    label="Rocket"    icon="rocket")
    (hash value="magic"     label="Magic"     icon="magic")
    (hash value="thumbs-up" label="Thumbs up" icon="thumbs-up")
    (hash value="globe"     label="Globe"     icon="globe")
    (hash value="heart"     label="Heart"     icon="heart")
  )
  update=(action (mut selected))
  iconComponent=(component "fa-icon")
}}
```

### With `options` array and custom template

```hbs
{{#radio-bar selected
  (array
    (hash value="rocket"    label="Rocket"    icon="rocket")
    (hash value="magic"     label="Magic"     icon="magic")
    (hash value="thumbs-up" label="Thumbs up" icon="thumbs-up")
    (hash value="globe"     label="Globe"     icon="globe")
    (hash value="heart"     label="Heart"     icon="heart")
  )
  update=(action (mut selected))
  iconComponent=(component "fa-icon")
  as |option|
}}
  {{fa-icon option.icon}}
  {{option.label}}
{{/radio-bar}}
```

### Pure template usage

```hbs
{{#radio-bar selected
  update=(action (mut selected))
  iconComponent=(component "fa-icon")
  as |bar|
}}
  {{bar.button "rocket"    label="Rocket"    icon="rocket"}}
  {{bar.button "magic"     label="Magic"     icon="magic"}}
  {{bar.button "thumbs-up" label="Thumbs up" icon="thumbs-up"}}
  {{bar.button "globe"     label="Globe"     icon="globe"}}
  {{bar.button "heart"     label="Heart"     icon="heart"}}
{{/radio-bar}}
```

### Pure template usage with custom template

```hbs
{{#radio-bar selected
  (array
    (hash value="rocket"    label="Rocket"    icon="rocket")
    (hash value="magic"     label="Magic"     icon="magic")
    (hash value="thumbs-up" label="Thumbs up" icon="thumbs-up")
    (hash value="globe"     label="Globe"     icon="globe")
    (hash value="heart"     label="Heart"     icon="heart")
  )
  update=(action (mut selected))
  iconComponent=(component "fa-icon")
  as |option|
}}
  {{fa-icon option.icon}}
  {{option.label}}
{{/radio-bar}}
```
