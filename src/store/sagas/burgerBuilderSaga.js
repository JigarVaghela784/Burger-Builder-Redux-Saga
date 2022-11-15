import { put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../action/index";

export function* initIngredientSaga(action) {
  try {
    const response = yield axios.get(
      "https://my-burger-app-59a08-default-rtdb.firebaseio.com/ingredients.json"
    );
    yield put(actions.setIngredient(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientFailed(error));
  }
}
