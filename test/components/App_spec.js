import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import App from '../../src/js/components/App';

describe('App', () => {

  it('renders on the document', () => {
      const appComponent = TestUtils.renderIntoDocument(<App />);
      const componentDiv = TestUtils.findRenderedDOMComponentWithClass(
        appComponent, 'main'
      );

      expect(componentDiv.textContent).to.equal('hello');
  });
});
