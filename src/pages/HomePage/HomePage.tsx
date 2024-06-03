import React, { lazy, Suspense } from 'react';
import { HomePageContainer } from './HomePage.styled';
const AboutUs = lazy(() => import("../../components/specific/AboutUs/AboutUs"));
const Features = lazy(() => import("../../components/specific/Features/Features"));
const Footer = lazy(() => import("../../components/specific/Footer/Footer"));
const Home = lazy(() => import("../../components/specific/Home/Home"));
const Mentors = lazy(() => import("../../components/specific/Mentors/Mentors"));
const Navbar = lazy(() => import("../../components/specific/Navbar/Navbar"));
const Pricing = lazy(() => import("../../components/specific/Pricing/Pricing"));

const HomePage = () => {


  return (
    <HomePageContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Home />
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
