import React from 'react';
import AllReview from '../AllReview/AllReview';
import Banner from '../Banner/Banner';
import BussinessSummary from '../BussinessSummary/BussinessSummary';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import ToolsSummary from '../ToolsSummary/ToolsSummary';
import VideoBanner from '../VideoBanner/VideoBanner';
const Home = () => {
    return (
        <div >
          <Banner></Banner>
          <ToolsSummary></ToolsSummary>
          <Products></Products>
          <AllReview></AllReview>
          <BussinessSummary/>
          <VideoBanner></VideoBanner>
          <Contact></Contact>
          
        </div>
    );
};

export default Home;