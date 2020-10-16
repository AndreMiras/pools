import React, { useState } from 'react';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import Nav from './Nav';
import Container from './Container';

const apiURL = "https://uniswaproi.herokuapp.com/portfolio/";

const fetchPortfolio = (address, onFetch, onError) => {
  const url = apiURL + address;
  fetch(url)
    .then(res => res.json())
    .then(
      result => {
        onFetch(result)
      },
      error => {
        onError(error);
      }
    );
};

const Content = () => {
  const [dataDict, setDataDict] = useState();
  const [loading, setLoading] = useState(false);

  const onAddress = address => {
    const onFetch = result => {
      setLoading(false);
      setDataDict(result);
    };
    const onError = error => {
      setLoading(false);
      setDataDict({ "error": error.toString() });
    };

    setLoading(true);
    fetchPortfolio(address, onFetch, onError);
  };

  return (
    <div id="content">
      <Nav onAddress={ onAddress } loading={ loading } />
      <Container dataDict={ dataDict } />
    </div>
  );
};

export default Content;

