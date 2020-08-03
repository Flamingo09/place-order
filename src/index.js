/* eslint-disable import/default */

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/application/Root';
import singleSpaReact from 'single-spa-react';

const singleSpaReactLifecycle = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root
})

/**
 * These lifecycles are nothing, but a promise. You can implement your own, instead of using this
 * */
export const bootstrap = [singleSpaReactLifecycle.bootstrap];

export async function mount(props) {
  console.log('Mount props : ', props);
  props.mountFnc();
  return singleSpaReactLifecycle.mount(props);
}

export async function unmount(props) {
  props.unMountFnc();
  return singleSpaReactLifecycle.unmount(props);
};

