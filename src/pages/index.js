import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Home from 'containers/Home';
// import { withTranslation } from 'utils/with-i18next';

const IndexPage = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  return <Home />;
};

// IndexPage.propTypes = {
//   t: PropTypes.func,
// };

// IndexPage.getInitialProps = async () => ({
//   // namespacesRequired: ['common', 'banner', 'features'],
// });

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'banner', 'features'])),
  },
});

export default IndexPage;
