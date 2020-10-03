import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe("App component tests", ()=> {
  test('Check App class on App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.hasClass("App")).toEqual(true);
  });
})

