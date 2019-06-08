import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import TodoList from './components/TodoList';

const App = () => (<Fragment>
  <Header />
  <main className="main bg-gray p-2">
    <div className="container grid-sm">
      <p className="p-2">Welcome to React</p>
      <div className="divider"></div>
      <TodoList />
    </div>
  </main>
  <Footer />
</Fragment>);

export default App;
