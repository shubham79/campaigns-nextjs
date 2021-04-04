import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Banner from 'components/Banner';
import Footer from 'components/Footer';
import styled from '@emotion/styled';

const MainRoot = styled('main')`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1024px;
`;

function Layout({ children }) {
  return (
    <>
      <Header />
      <MainRoot>
        <Banner />
        {children}
      </MainRoot>
      {/* <Footer /> */}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
