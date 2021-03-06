import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index'
import { middlewares } from '../configureStore'

/**
 * Create a testing store with imported reducers, middleware, and initial state
 * @function storeFactory 
 * @param  {object} initialState - initial state for store
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
    const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleWare(rootReducer, initialState)
}
/**
 * Return node(s) with sgiven data-test attribute
 * @param  {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param  {string} val - value of data-test attribute 
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
}