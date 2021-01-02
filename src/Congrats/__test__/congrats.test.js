import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

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

})

test('renders no text winner is false', () => {
    
})

test('renders text when winner is successful', () => {
    
})