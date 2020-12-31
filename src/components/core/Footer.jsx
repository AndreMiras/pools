import React from 'react';
import { version } from '../../../package.json';

const Footer = () => (
  <footer className="sticky-footer bg-white">
    <div className="container my-auto">
      <div className="copyright text-center my-auto">
        <span>
          Copyright &copy; Andre Miras 2020 - Pools v
          {version}
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
