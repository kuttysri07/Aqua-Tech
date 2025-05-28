import React from 'react';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Aboutus from './Pages/Aboutus';
import Footer from './Pages/Footer';
import Nav from './components/Nav';

const App = () => {
  return (
    <div>
      <Nav />
      <section id="home">
        <Home />
      </section>
      <section id="product">
        <Product />
      </section>
      <section id="about">
        <Aboutus />
      </section>
      <Footer />
    </div>
  );
};

export default App;
