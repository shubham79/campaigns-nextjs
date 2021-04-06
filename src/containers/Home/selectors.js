import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectShowcasesDomain = state => state.showcases || initialState;
const selectTableDomain = state => state.showcases || initialState;

const selectShowcases = () => createSelector(selectShowcasesDomain, subState => subState);
const selectTableData = () => createSelector(selectTableDomain, subState => subState.tableData);

export { selectShowcases, selectShowcasesDomain, selectTableData };
