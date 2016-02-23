'use strict';

import React from 'react';

require('styles/template/PageTemplate.sass');

var divStyle = {
  color: 'white',
  width: '100%',
  height: '100%',
  backgroundImage: 'url( ../../images/background1.jpg )',
  backgroundSize: '1400',
  backgroundRepeat: 'no-repeat',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

class PageTemplateComponent extends React.Component {
  render() {
    return (
      <div className="pagetemplate-component">
        <div style={divStyle}> Welcome to League Community POC - Pate Template body 
        </div>
      </div>
    );
  }
}

PageTemplateComponent.displayName = 'TemplatePageTemplateComponent';

// Uncomment properties you need
// PageTemplateComponent.propTypes = {};
// PageTemplateComponent.defaultProps = {};

export default PageTemplateComponent;
