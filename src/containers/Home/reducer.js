import produce from 'immer';
import { tableData } from 'utils/constants';

import { setTableData } from './actions';

export const initialState = {
  loading: false,
  fetched: false,
  error: null,
  tableData: tableData,
};

const showcasesReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case setTableData.SUCCESS:
        draft.tableData[payload.id].createdOn = payload.data;
        break;
    }
  });

export default showcasesReducer;
