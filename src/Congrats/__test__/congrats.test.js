import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import Congrats from '../congrats'

Enzyme.configure( { adapter: new EnzymeAdapter() });

/*
* Factory function to create a ShallowWrapper for the Congrats component
* @function setup
* @param {object} props - component props specific to this wrapper
* @returns {ShallowWrapper}
*/

const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
}

test('renders without error', () => {
    const wrapper = setup( {success: false} );
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1)
})

test('renders no text winner is false', () => {
    const wrapper = setup( {success : false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
})

test('renders text when winner is successful', () => {
    const wrapper = setup( {success : true} );
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0)
})

test('does not throw warning with expected props', () => {
    const expectedProps = { success : false };
    checkProps(Congrats, expectedProps);
})