import React from 'react';
import axios from 'axios';
import renderer from 'react-test-renderer';

import App, { Counter } from './App';

beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve([3, 5, 9]));
});

afterEach(() => {
  axios.get.mockClear();
});

describe('App Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Counter Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(<Counter counter={1} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
