import React, { lazy, Suspense } from 'react';
import { HomePageContainer } from './HomePage.styled';
import Loading from '../../components/common/Loading/Loading';
import Navbar from '../../components/specific/Navbar/Navbar';
import Home from '../../components/specific/Home/Home';
import Footer from '../../components/specific/Footer/Footer';
import { FloatingBox } from '../../styles/Generics/Generics';
const AboutUs = lazy(() => import("../../components/specific/AboutUs/AboutUs"));
const Features = lazy(() => import("../../components/specific/Features/Features"));
const Mentors = lazy(() => import("../../components/specific/Mentors/Mentors"));
const Pricing = lazy(() => import("../../components/specific/Pricing/Pricing"));

const HomePage = () => {


  return (
    <HomePageContainer>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <FloatingBox style={{top:'17%', right: '-15%'}}/>
        <Home />
        <FloatingBox style={{top:'30%', left: '-15%'}}/>
        <Features />
        <Pricing />
        <Mentors />
        <AboutUs />
        <Footer />  
      </Suspense>
    </HomePageContainer>
  );
};

export default HomePage;
