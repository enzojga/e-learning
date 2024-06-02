import AboutUs from "./components/specific/AboutUs/AboutUs";
import Features from "./components/specific/Features/Features";
import Home from "./components/specific/Home/Home";
import Mentors from "./components/specific/Mentors/Mentors";
import Navbar from "./components/specific/Navbar/Navbar";
import Pricing from "./components/specific/Pricing/Pricing";

function App() {

  return (
    <>
      <Navbar />
      {/* <Home />
      <Features />
      <Pricing />
      <Mentors /> */}
      <AboutUs />
    </>
  );
}

export default App;
