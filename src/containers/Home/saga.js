import { takeLatest, put } from 'redux-saga/effects';

import { setTableData } from './actions';

/**
 * Function to update tableData based on date selection
 * @param {payload} param0
 */
export function* setTableDataReq({ payload }) {
  try {
    yield put(setTableData.request());

    yield put(setTableData.success(payload));
  } catch (err) {
    yield put(setTableData.failure(err));
  } finally {
    yield put(setTableData.fulfill());
  }
}

export default function* dataShowcases() {
  yield takeLatest(setTableData.TRIGGER, setTableDataReq);
}
