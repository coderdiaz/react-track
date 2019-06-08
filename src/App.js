import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (<Fragment>
  <Header />
  <main className="main bg-gray p-2">
    <div className="container">
      Welcome to React
    </div>
  </main>
  <Footer />
</Fragment>);

export default App;
