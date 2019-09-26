import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hero from './components/hero';
import News from './components/news';
import Subscribe from './components/subscribe';
import Courses from './components/courses';
import ContactUs from './components/contactus';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Hero></Hero>  
      <News></News>  
      <Subscribe></Subscribe>
      <Courses></Courses>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
