import Enzyme, {shallow, render, mount} from 'enzyme';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import App from './App'
import expect from 'expect';
Enzyme.configure({ adapter: new Adapter() });


describe('App Component', () => {
 
it('should render without throwing an error', () => {
    expect(shallow(<App />).find('input').exists()).toBe(true)
  })
it('renders a numeral input', () => {
    expect(shallow(<App />).find('#Numeral').length).toEqual(1)
   })

 })


 describe('Numeral input', ()=>{
    it('should respond to change event and change the state of the App Component', () => { 
        const wrapper = shallow(<App />);
        wrapper.find('#Numeral').simulate('change', {target: {name: 'Numeral', value:"M"}});
        expect(wrapper.state('input')).toBe("M");
    })
 })

 describe('Clear input', ()=>{
    it('should clear input value', () => { 
        const wrapper = shallow(<App />);
        wrapper.find('#clear').simulate('click', {target: {name: 'numeral', value:"M"}});
        expect(wrapper.state('input')).toBe("");
    })
 })

 describe('Send error message', ()=>{
    it('should render the error message component if state.isValid is true', () => {
        const errorComponent = shallow(<App />);
        errorComponent.setState({ isValid: true });
        expect(errorComponent.find("#error").length).toBe(1);
    });
 })


 
