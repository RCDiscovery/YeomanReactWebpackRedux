'use strict';

import React from 'react';

require('styles/template/PageTemplate.scss');
import Template1 from './template1.rt';
import Template2 from './template2.rt';

var currTemplate = 'template2';

class PageTemplateComponent extends React.Component {
  render() {

    if (currTemplate == 'template1') {
      return (
              <Template1></Template1>
        );
    }
    else {
      return (
              <Template2></Template2>
        );
    }
  }
}

PageTemplateComponent.displayName = 'TemplatePageTemplateComponent';

// Uncomment properties you need
// PageTemplateComponent.propTypes = {};
// PageTemplateComponent.defaultProps = {};

export default PageTemplateComponent;
