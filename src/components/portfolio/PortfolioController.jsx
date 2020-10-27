import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { fetchPortfolio } from '../../utils/api';
import ErrorDialog from '../core/ErrorDialog';
import Portfolio from './Portfolio';

const PortfolioController = () => {
  const { address } = useParams();
  const [dataDict, setDataDict] = useState(null);
  const [errorDetail, setErrorDetail] = useState(null);
  const onOk = (data) => {
    setErrorDetail(null);
    setDataDict(data);
  };
  const errorDialog = errorDetail ? (
    <ErrorDialog
      detail={errorDetail.detail}
    />
  ) : null;
  const portfolio = dataDict ? <Portfolio dataDict={dataDict} /> : null;
  const spinner = !(dataDict || errorDetail) ? <Spinner animation="border" /> : null;
  useEffect(() => {
    setErrorDetail(null);
    setDataDict(null);
    fetchPortfolio(address, onOk, setErrorDetail);
  }, [address]);
  return (
    <>
      {errorDialog}
      {spinner}
      {portfolio}
    </>
  );
};

export default PortfolioController;
