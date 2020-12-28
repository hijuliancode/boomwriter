import React from 'react';
import { shallow } from 'enzyme';
import BoomwriterApp from './BoomwriterApp';

describe('test in BoomwriterApp', () => {
  test('renders BoomwriterApp', () => {
    const wrapper = shallow(<BoomwriterApp />);
    expect( wrapper ).toMatchSnapshot();
  });
})

