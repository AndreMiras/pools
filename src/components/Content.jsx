import React, { useState } from 'react';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';
import Container from './Container';
import ErrorDialog from './ErrorDialog';
import Nav from './Nav';
import { fetchPortfolio } from '../utils/api';

const Content = () => {
  const [dataDict, setDataDict] = useState(null);
  const [errorDetail, setErrorDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  const onAddress = (address) => {
    const onOk = (data) => {
      setLoading(false);
      setDataDict(data);
    };
    const onNotOk = (data) => {
      setLoading(false);
      setErrorDetail(data);
    };

    setLoading(true);
    fetchPortfolio(address, onOk, onNotOk);
  };
  const container = dataDict ? <Container dataDict={dataDict} /> : null;
  const errorDialog = errorDetail ? <ErrorDialog detail={errorDetail.detail} /> : null;

  return (
    <div id="content">
      {errorDialog}
      <Nav onAddress={onAddress} loading={loading} />
      {container}
    </div>
  );
};

export default Content;
