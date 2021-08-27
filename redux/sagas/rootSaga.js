import { takeLatest } from "@redux-saga/core/effects";
import { GET_NEWS } from "../reducer";
import { handleGetNews } from "./handler";

export function* watcherSaga() {
  yield takeLatest(GET_NEWS, handleGetNews);
}
