import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '@my-org/ui';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Welcome to content!</title>
      </Head>
      <div className="app">
        <Header appName="Content" logo={NxLogo}/>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
};

export default CustomApp;
