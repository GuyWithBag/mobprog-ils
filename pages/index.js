import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, HeaderImage } from '../components';

// [Pages:]
//
// -Homepage (WIP)
// -Services
// -Delivery
// -About
// -Customer Service
// -Business Profile
// -Contact

// To do list"
//
// Fix the headerimage so that when you make the window smaller, it insteads zooms in
// Add the products
// FIx the alignments and figure out how they work from youtube

// https://mobprog-ils.sanity.studio/desk/product;c409ccec-7402-4b0c-b913-680d3abb61f8
// https://mobprog-ils.vercel.app/

//update chocolate boquet desc
const Home = ({ products, bannerData }) => (
  <>
    <HeaderImage />
    <div className='layout-inner-contents'>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>The best selling products of Celebrace</p>
        </div>
        <div className="products-container">
          {/* Only for the name of each product */}
          {products?.map((product) => product.name)}
        </div>
        <div className="products-container">
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>

        <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  </>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;