import React from 'react';
import { shallow } from 'enzyme';
import HeaderNav from './index';

describe('<HeaderNav/>', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<HeaderNav />);

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
