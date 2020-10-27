import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { fetchPairs } from '../../utils/api';
import ErrorDialog from '../core/ErrorDialog';
import Pairs from './Pairs';

const PairsController = () => {
  const [pairs, setPairs] = useState(null);
  const [errorDetail, setErrorDetail] = useState(null);
  const onOk = (data) => {
    setErrorDetail(null);
    setPairs(data);
  };
  const errorDialog = errorDetail ? (
    <ErrorDialog
      detail={errorDetail.detail}
    />
  ) : null;
  const pairsElement = pairs ? <Pairs pairs={pairs} /> : null;
  const spinner = !(pairs || errorDetail) ? <Spinner animation="border" /> : null;
  useEffect(() => {
    setErrorDetail(null);
    setPairs(null);
    fetchPairs(onOk, setErrorDetail);
  }, []);
  return (
    <>
      {errorDialog}
      {spinner}
      {pairsElement}
    </>
  );
};

export default PairsController;
