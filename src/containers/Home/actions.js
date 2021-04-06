import { createRoutine } from 'redux-saga-routines';

import { SET_TABLEDATA } from './constants';

export const setTableData = createRoutine(SET_TABLEDATA);
