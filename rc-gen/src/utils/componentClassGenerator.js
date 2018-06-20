const componentClassGenerator = componentName => {
  return `
/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';

/*
** Styles
*/
import './${componentName}.styl';

class ${componentName} extends React.Component {

  state = {}

  render() {
    const {} = this.state;
    const {} = this.props;

    return (
      <div className='${componentName.toLowerCase()}'>Class Component ${componentName}</div>
    )
  }
}

${componentName}.propTypes = {};

export default ${componentName};
`;
};

module.exports = componentClassGenerator;
