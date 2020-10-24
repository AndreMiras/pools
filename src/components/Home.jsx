import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

const Home = () => (
  <>
    <Title title="Home" />
    <div className="row">
      <p>
        Enter your address to track your portfolio, e.g.
        {' '}
        <Link to="/portfolio/0x000000000000000000000000000000000000dEaD">burn address portfolio</Link>
      </p>
    </div>
  </>
);

export default Home;
