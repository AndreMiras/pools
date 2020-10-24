import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { fetchPairsDaily } from '../utils/api';
import ErrorDialog from './ErrorDialog';
import Pool from './Pool';

const PoolController = () => {
  const { address } = useParams();
  const [pairDailyList, setTokenDailyList] = useState(null);
  const [errorDetail, setErrorDetail] = useState(null);
  const onOk = (data) => {
    setErrorDetail(null);
    setTokenDailyList(data);
  };
  const errorDialog = errorDetail ? (
    <ErrorDialog
      detail={errorDetail.detail}
    />
  ) : null;
  const pool = pairDailyList ? <Pool pairDailyList={pairDailyList} /> : null;
  const spinner = !(pairDailyList || errorDetail) ? <Spinner animation="border" /> : null;
  useEffect(() => {
    setErrorDetail(null);
    setTokenDailyList(null);
    fetchPairsDaily(address, onOk, setErrorDetail);
  }, [address]);
  return (
    <>
      {errorDialog}
      {spinner}
      {pool}
    </>
  );
};

export default PoolController;
