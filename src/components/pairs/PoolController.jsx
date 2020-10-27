import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { fetchPairsDaily } from '../../utils/api';
import ErrorDialog from '../core/ErrorDialog';
import Pool from './Pool';

const PoolController = () => {
  const { address } = useParams();
  const [pairsDaily, setPairsDaily] = useState(null);
  const [errorDetail, setErrorDetail] = useState(null);
  const onOk = (data) => {
    setErrorDetail(null);
    setPairsDaily(data);
  };
  const errorDialog = errorDetail ? (
    <ErrorDialog
      detail={errorDetail.detail}
    />
  ) : null;
  const pool = pairsDaily ? <Pool pairsDaily={pairsDaily} /> : null;
  const spinner = !(pairsDaily || errorDetail) ? <Spinner animation="border" /> : null;
  useEffect(() => {
    setErrorDetail(null);
    setPairsDaily(null);
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
