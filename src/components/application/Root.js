import React, {Component} from 'react';
import {AppContainer} from "react-hot-loader";
import {render} from "react-dom";

import WrapperApp from "./WrapperApp";
import '../../styles/styles.scss';// Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('../../favicon.ico'); // Tell webpack to load favicon.ico

const domElement = document.getElementById('order-status');

export default class Root extends Component {
  render() {
    return (
      <AppContainer>
        <WrapperApp basename={this.props.basename}/>
      </AppContainer>
    );
  }
}

if(domElement) {
  render(
    <AppContainer>
      <WrapperApp />
    </AppContainer>,
    document.getElementById('order-status')
  );
}

if (module.hot) {
  module.hot.accept('./WrapperApp', ({basename}) => {
    const NewRoot = require('./WrapperApp').default;
    if(domElement) {
      render(
        <AppContainer>
          <NewRoot bbasename={basename ? basename : ''}/>
        </AppContainer>,
        document.getElementById('order-status')
      );
    }
  });
}
