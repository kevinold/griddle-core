import React from 'react/addons';
var TestUtils = React.addons.TestUtils;

import App from '../js/containers/app';

describe("App", () => {
  
  it("should render", () => {

    let app = TestUtils.renderIntoDocument(<App />);

    expect(app).toBeDefined();
    
  });

});  

