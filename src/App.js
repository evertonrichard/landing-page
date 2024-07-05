import React from 'react';
import FirstSection from './components/sections/FirstSection';
import SecondSection from './components/sections/SecondSection';
import ThirdSection from './components/sections/ThirdSection';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="App">
      <FirstSection />
      <SecondSection/>
      <ThirdSection/>
      <Footer/>
    </div>
  );
}

export default App;
