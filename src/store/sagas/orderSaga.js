import { put } from "redux-saga/effects";
import axios from "../../axios-Order";
import * as actions from "../action/index";

export function* purchaseBurgerSaga(action) {
  console.log("action.token", action.token);
  yield put(actions.purchaseBurgerStart());
  try {
    const response = yield axios.post(
      `/orders.json?auth=${action.token}`,
      action.orderData
    );
    yield put(
      actions.purchaseBurgerSuccess(response.data.name, action.orderData)
    );
  } catch (error) {
    yield put(actions.purchaseBurgerFail(error));
  }
}

export function* orderFetchSaga(action) {
  yield put(actions.orderFetchStart());
  const url = `/orders.json?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`;
  try {
    const res = yield axios.get(url);
    const fetchOrderData = [];
    for (let key in res.data) {
      fetchOrderData.push({ ...res.data[key], id: key });
    }
    yield put(actions.orderFetchSuccess(fetchOrderData));
  } catch (error) {
    yield put(actions.orderFetchFail(error));
  }
}
