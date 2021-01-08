import App from './App';
import { storeFactory } from './test/testUtils'
import React from 'react'
import { shallow } from 'enzyme';


const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store}/>).dive().dive();
  return wrapper;
}

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success);
})
  test('getSecretWord  is a function prop', () => {
      const wrapper = setup();
      const getSecretWordProp = wrapper.instance().props.getSecretWord;
      expect(getSecretWordProp).toBeInstanceOf(Function)
  })
  test('has access to secretWord state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const successProp = wrapper.instance().props.secretWord
    expect(successProp).toBe(secretWord);
  })
  test('has access to guessedWords state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const wordsProps = wrapper.instance().props.guessedWords
    expect(wordsProps).toBe(guessedWords);
  })
});
