import React from 'react';
import renderer from 'react-test-renderer';

import App, { Counter } from './App';

describe('App Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <App />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Counter Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <Counter counter={1} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});