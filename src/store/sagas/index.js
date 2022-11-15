import { takeEvery } from "redux-saga/effects";
import {
  authCheckStateSaga,
  authCheckTimeoutSaga,
  authUserSaga,
  logoutSaga,
} from "./authSaga";
import * as actionTypes from "../action/actionTypes";
import { initIngredientSaga } from "./burgerBuilderSaga";
import {  orderFetchSaga, purchaseBurgerSaga } from "./orderSaga";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_USERS, authUserSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE_DATA, authCheckStateSaga);
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, authCheckTimeoutSaga);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_INGREDIENT, initIngredientSaga);
}
export function* watchOrders() {
  yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
  yield takeEvery(actionTypes.ORDER_FETCH_INIT, orderFetchSaga);
}