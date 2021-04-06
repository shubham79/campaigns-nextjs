import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/inject-reducer';
import { useInjectSaga } from 'utils/inject-saga';

import Layout from 'components/Layout';
import Features from 'components/Features';

import saga from './saga';
import reducer from './reducer';
import { setTableData } from './actions';
import { selectShowcases, selectTableData } from './selectors';

export function Home({ tableData, setTableData }) {
  useInjectSaga({ key: 'showcases', saga });
  useInjectReducer({ key: 'showcases', reducer });

  return (
    <Layout>
      <Features tableData={tableData} setTableData={setTableData} />
    </Layout>
  );
}

const mapStateToProps = createStructuredSelector({
  showcasesData: selectShowcases(),
  tableData: selectTableData(),
});

export function mapDispatchToProps(dispatch) {
  return {
    setTableData: data => {
      dispatch(setTableData(data));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Home.propTypes = {
  tableData: PropTypes.array,
  setTableData: PropTypes.func,
};

export default compose(withConnect, memo)(Home);
