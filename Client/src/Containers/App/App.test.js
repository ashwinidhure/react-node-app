import React from 'react';
import App from './App';

describe('renders App component', () => {
  it('should render App component', () => {
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    const component = findByTestAttr(wrapper, 'AppComponent');
    expect(component.length).toBe(1);
})
});

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}