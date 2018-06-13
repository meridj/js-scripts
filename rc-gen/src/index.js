#!/usr/bin/env node

const args = require('minimist')(process.argv.slice(2));
const Component = require('./Classes/Component');

const checkArgs = () => {
  let isOk;

  if (args._.length !== 1 || (!args.func && !args.class)) {
    isOk = false;
  } else {
    isOk = true;
  }
  return isOk;
};

const main = () => {
  if (!checkArgs()) {
    console.error('USAGE: Component [OPTIONS: --class, --func]');
  } else {
    const componentName = args._.join('');
    const componentType = args.class ? 'class' : 'func';
    const component = new Component(componentName, componentType);

    component.create();
  }
};

module.exports = main;
