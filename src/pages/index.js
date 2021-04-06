import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Home from 'containers/Home';

const IndexPage = () => {
  return <Home />;
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'banner', 'features'])),
  },
});

export default IndexPage;
