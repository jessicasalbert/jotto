import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from '../Input';


/**
 * @function setup
 * @param  {object} initialState={} 
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    return wrapper;
}


describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState)
        })
        
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1)
        });

        test('renders input box', () => {
            const input = findByTestAttr(wrapper, "input-box");
            expect(input.length).toBe(1)
        });

        test('renders submit button', () => {
            const button = findByTestAttr(wrapper, "input-button");
            expect(button.length).toBe(1)
        })
    })

    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState)
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test('does not render input box', () => {
            const input = findByTestAttr(wrapper, "input-box");
            expect(input.length).toBe(0);
        });

        test('does not render submit button', () => {
            const button = findByTestAttr(wrapper, "input-button");
            expect(button.length).toBe(0);
        })
    })

})

describe('update state', () => {

})