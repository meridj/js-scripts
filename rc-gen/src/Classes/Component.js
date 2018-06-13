const fs = require('fs');
const componentClassGenerator = require('../utils/componentClassGenerator');
const componentFuncGenerator = require('../utils/componentFuncGenerator');

class Component {
  constructor(componentName, componentType) {
    this.componentName = componentName;
    this.componentType = componentType;
  }

  createComponentFolder() {
    fs.mkdirSync(this.componentName);
  }

  createComponentLogicFile() {
    const componentLogicFilename = `./${this.componentName}/${
      this.componentName
    }.js`;

    const componentContentFile =
      this.componentType === 'class'
        ? componentClassGenerator(this.componentName)
        : componentFuncGenerator(this.componentName);

    fs.appendFileSync(componentLogicFilename, componentContentFile);
  }

  createComponentStyleFile() {
    const componentStyleFilename = `./${this.componentName}/${
      this.componentName
    }.css`;

    fs.appendFileSync(componentStyleFilename, "h1 { display: 'flex' }");
  }

  create() {
    this.createComponentFolder();
    this.createComponentLogicFile();
    this.createComponentStyleFile();
  }
}

module.exports = Component;
