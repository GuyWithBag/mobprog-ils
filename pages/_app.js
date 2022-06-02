import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout, Navbar } from '../components';
import { StateContext } from '../context/StateContext';
import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/sidebar.css';
import '../styles/about.css' ;
import '../styles/contact.css';
import '../styles/services.css';
import '../styles/customer-service.css';
import '../styles/questions-and-answers.css';

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
