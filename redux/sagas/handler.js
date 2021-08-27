import { call, put } from "redux-saga/effects";
import { setNews } from "../reducer";
import { requestGetNews } from "../sagas/request";

export function* handleGetNews(action) {
  try {
    const response = yield call(requestGetNews);
    const { data } = response;
    yield put(setNews(data));
  } catch (err) {
    console.log(err);
  }
}
