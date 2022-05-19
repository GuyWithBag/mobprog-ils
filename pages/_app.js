import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout, Navbar } from '../components';
import { StateContext } from '../context/StateContext';
import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/about.css' ;
import '../styles/contact.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateContext>
        <header>
          <Navbar />
        </header>
        <Layout>
          <Toaster />
          <Component {...pageProps} />  
        </Layout>
      </StateContext>
    </>
  )
}

export default MyApp
