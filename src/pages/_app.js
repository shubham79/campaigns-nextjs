import React from 'react';

import { Provider } from 'react-redux';
import Head from 'next/head';
import App from 'next/app';

import withReduxStore from 'utils/with-redux-store';
// import { appWithTranslation } from 'utils/with-i18next';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { appWithTranslation } from 'next-i18next';

import MomentUtils from '@date-io/moment';

import 'fontsource-metropolis';
import '@typefaces-pack/typeface-inter';

class Srr extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <>
        <Head>
          <title>React Next Boilerplate</title>
        </Head>

        <Provider store={reduxStore}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Component {...pageProps} />
          </MuiPickersUtilsProvider>
        </Provider>
      </>
    );
  }
}

export default appWithTranslation(withReduxStore(Srr));
