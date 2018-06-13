const args = require('minimist')(process.argv.slice(2));
const Component = require('./Classes/Component');

const checkArgs = () => {
  return (args._.length === 1 && (args.func || args.class));
};

const main = () => {
  if (!checkArgs()) {
    console.error('USAGE: rc-gen ComponentName [OPTIONS: --class, --func]');
  } else {
    const componentName = args._.join('');
    const componentType = args.class ? 'class' : 'func';
    const component = new Component(componentName, componentType);

    component.create();
  }
};

module.exports = main;
