import React, { useState } from 'react';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import Nav from './Nav';
import Container from './Container';

const apiURL = "https://uniswaproi.herokuapp.com/portfolio/";

const fetchPortfolio = address => onFetch => {
  const url = apiURL + address;
  fetch(url)
    .then(res => res.json())
    .then(
      result => {
        onFetch(result)
      },
      error => {
        console.error(error);
      }
    );
};

const Content = () => {
  const [dataDict, setDataDict] = useState();

  const onAddress = address => {
    fetchPortfolio(address)(setDataDict);
  };

  return (
    <div id="content">
      <Nav onAddress={ onAddress } />
      <Container dataDict={ dataDict } />
    </div>
  );
};

export default Content;

