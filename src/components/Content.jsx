import React, { useState } from 'react';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';
import Nav from './Nav';
import Container from './Container';
import { fetchPortfolio } from '../utils/api';

const Content = () => {
  const [dataDict, setDataDict] = useState();
  const [loading, setLoading] = useState(false);

  const onAddress = (address) => {
    const onFetch = (result) => {
      setLoading(false);
      setDataDict(result);
    };
    const onError = (error) => {
      setLoading(false);
      setDataDict({ error: error.toString() });
    };

    setLoading(true);
    fetchPortfolio(address, onFetch, onError);
  };

  return (
    <div id="content">
      <Nav onAddress={onAddress} loading={loading} />
      <Container dataDict={dataDict} />
    </div>
  );
};

export default Content;
