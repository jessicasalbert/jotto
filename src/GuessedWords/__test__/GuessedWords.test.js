import { EnzymeAdapter } from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import GuessedWords from './../GuessedWords';

const defaultProps = { 
    guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3 }
    ]
};

/**
 * @function setup
 * @param  {object} props - Component props 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />)
} 

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
})

// Describe allows you to group related tests
describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    })

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    })

    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
})

describe('if there are words guessed', () => {
    let wrapper;
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
    ];

    beforeEach(() => {
        wrapper = setup({ guessedWords })
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    })

    test('renders "guessed words" secition', () => {
        const wordsDiv = findByTestAttr(wrapper, 'guessed-words');
        expect(wordsDiv.length).toBe(1);
    })

    test('correct number of guessed words', () => {
        const wordsNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(wordsNodes.length).toBe(guessedWords.length);
    })
})