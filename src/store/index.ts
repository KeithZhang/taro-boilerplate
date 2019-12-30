import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import goodsReducer from "pages/goods/reducer";
import orderReducer from "pages/order/reducer";

const staticReducers = {
  goods: goodsReducer,
  order: orderReducer
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middlewares = [thunkMiddleware];

if (
  process.env.NODE_ENV === "development" &&
  process.env.TARO_ENV !== "quickapp"
) {
  middlewares.push(require("redux-logger").createLogger());
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState, enhancer) as any;
  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};
  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };
  // Return the modified store
  return store;
}

function createReducer(asyncReducers?) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers
  });
}
