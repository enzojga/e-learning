import React, { lazy, Suspense } from 'react';
const LazyAboutUs = lazy(() => import("../../components/specific/AboutUs/AboutUs"));
const LazyFeatures = lazy(() => import("../../components/specific/Features/Features"));
const LazyFooter = lazy(() => import("../../components/specific/Footer/Footer"));
const LazyHome = lazy(() => import("../../components/specific/Home/Home"));
const LazyMentors = lazy(() => import("../../components/specific/Mentors/Mentors"));
const LazyNavbar = lazy(() => import("../../components/specific/Navbar/Navbar"));
const LazyPricing = lazy(() => import("../../components/specific/Pricing/Pricing"));

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyNavbar />
        <LazyHome />
        <LazyFeatures />
        <LazyPricing />
        <LazyMentors />
        <LazyAboutUs />
        <LazyFooter />
      </Suspense>
    </>
  );
};

export default HomePage;
