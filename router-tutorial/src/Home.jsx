import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is a Home Page.</p>
      <ul>
        <li>
          <Link to="/About">Introduction</Link>
        </li>
        <li>
          <Link to="/Articles">Article list</Link>
        </li>
        <li>
          <Link to="/Invoices">Invoices</Link>
        </li>
      </ul>

    </div>
  )
};

export default Home;