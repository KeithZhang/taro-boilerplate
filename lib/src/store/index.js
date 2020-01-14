"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const reducer_1 = require("pages/goods/reducer");
const reducer_2 = require("pages/order/reducer");
const staticReducers = {
    goods: reducer_1.default,
    order: reducer_2.default
};
const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : redux_1.compose;
const middlewares = [redux_thunk_1.default];
if (process.env.NODE_ENV === "development" &&
    process.env.TARO_ENV !== "quickapp") {
    middlewares.push(require("redux-logger").createLogger());
}
const enhancer = composeEnhancers(redux_1.applyMiddleware(...middlewares)
// other store enhancers if any
);
function configureStore() {
    const store = redux_1.createStore(createReducer(), {}, enhancer);
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
exports.default = configureStore;
function createReducer(asyncReducers) {
    return redux_1.combineReducers(Object.assign(Object.assign({}, staticReducers), asyncReducers));
}
//# sourceMappingURL=index.js.map