import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import burgerBuilderReducer from "./store/reducer/burgerBuilderReducer";
import orderReducer from "./store/reducer/orderReducer";
import authReducer from "./store/reducer/authReducer";
import thunk from "redux-thunk";
import { watchAuth, watchBurgerBuilder, watchOrders } from "./store/sagas/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});
const sagaMiddleware = createSagaMiddleware();
const newStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBurgerBuilder);
sagaMiddleware.run(watchOrders);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={newStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
