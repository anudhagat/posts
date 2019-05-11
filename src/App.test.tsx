import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.debug()).toMatchSnapshot();
    expect(wrapper.find('Provider')).toHaveLength(1);
  });
});
