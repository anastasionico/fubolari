import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Hero from './components/hero/Hero';
import News from './components/news/News';
import Subscribe from './components/Subscribe';
import Courses from './components/courses/Courses';
import ContactUs from './components/Contactus';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <News></News>
      <Subscribe></Subscribe>
      <Courses></Courses>
      <ContactUs></ContactUs>
      <Sponsor></Sponsor>
      <Footer></Footer>
    </div>
  );
}

export default App;
