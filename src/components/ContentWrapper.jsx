import React from 'react';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import { Navbar as ReactNavbar } from 'react-bootstrap'
import Content from './Content';


const ContentWrapper = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <Content />
    </div>
  );
};

export default ContentWrapper;

