import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import SelectLanguages from './SelectLanguages';

const HeaderRoot = styled(`header`)`
  left: 0;
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0px;
  z-index: 1000;
`;

const HeaderContainer = styled('div')`
  background: #1f2640;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
`;

const NavRoot = styled('nav')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  height: 80px;
  max-width: 1024px;
`;

const ListActions = styled('div')`
  display: flex;
`;

const Space = styled('div')`
  flex: 1 1 auto;
`;

const Logo = styled('div')`
  width: 147px;
  height: 45px;
  background: url('/static/images/logo.png');
`;

export function Header() {
  return (
    <HeaderRoot>
      <HeaderContainer>
        <NavRoot>
          <Logo></Logo>
          <Space />
          <ListActions>
            <SelectLanguages />
          </ListActions>
        </NavRoot>
      </HeaderContainer>
    </HeaderRoot>
  );
}

Header.propTypes = {
  t: PropTypes.func,
};

export default Header;
