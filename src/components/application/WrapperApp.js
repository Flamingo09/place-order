import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from "../../store/configureStore";

export default class WrapperApp extends Component {
  render() {
    const {store, history} = configureStore(this.props.basename ? this.props.basename : '');
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}
