import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

const BannerRoot = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
`;

const Title = styled('h1')`
  font-size: 48px;
  font-style: normal;
  font-weight: bold;
  color: #2b416c;
`;

export function Banner() {
  const { t } = useTranslation('banner');
  return (
    <BannerRoot>
      <Title> {t('title')}</Title>
    </BannerRoot>
  );
}

Banner.propTypes = {
  t: PropTypes.func,
};

export default Banner;
