import React from 'react';
import {shallow} from 'enzyme';
import Profile from './Profile';

describe('Profile', () => {
  it ('should render without errors', () => {
    const component = shallow(<Profile/>);
    expect(component.find('.Profile').length).toBe(1);
  });

  it ('should handle input changes', () => {
    const username= 'ta';
    const component = shallow(<Profile/>);
    const wrapper = component.find("#username-input");
    expect(wrapper.length).toBe(1);
    //{target: {value: }} mocks the (event) passed to the handler
    wrapper.simulate('change', {target: {value: username,
                                         name: wrapper.props().name}});
    //we have to get an 'instance()' of a component to access its state
    const newProfileInstance = component.instance();
    expect(newProfileInstance.state.username).toEqual(username);
  });

  it ('should handle display link with username & input has been entered', () => {
    //TODO
    expect(true).toBe(false);
  });

});
