import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from "./store";

const enhancer: [] = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  if (typeof devToolsExtension === 'function') {
    // @ts-ignore
    enhancer.push(devToolsExtension());
  }
}

// @ts-ignore
function configureStore(preloadedState) {
  const store = createStore(createRootReducer(), preloadedState, compose(applyMiddleware(thunk), ...enhancer));

  return store;
}

export default configureStore;