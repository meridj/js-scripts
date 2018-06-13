const componentFuncGenerator = componentName => {
  return `
/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';

/*
** Styles
*/
import '${componentName}.css';

const ${componentName} = (props) => {
  return (
    <div className='${componentName.toLowerCase()}'>Component ${componentName}</div>
  )
}

${componentName}.propTypes = {};

export default ${componentName};
`;
};

module.exports = componentFuncGenerator;
