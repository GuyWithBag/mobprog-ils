import React from 'react';

import { HeaderImage, Navbar } from '../components';
import '../styles/globals.css';
import '../styles/navbar.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <HeaderImage />
      <Component {...pageProps} />  
    </>
  )
}

export default MyApp
