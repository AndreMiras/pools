import React from 'react';
import { Container as ReactContainer } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getPortfolioUrl } from '../utils/api';
import Pairs from './Pairs';


const Download = ({ address }) => (
  <Button variant="primary" size="sm" href={ getPortfolioUrl(address) }>
    <FontAwesomeIcon icon="download" /> Download
  </Button>
);

const Container = ({ dataDict }) => {
  const pairs = dataDict ? <Pairs dataDict={ dataDict } /> : null;
  const download = dataDict ? <Download address={ dataDict.address } /> : null;
  return (
    <ReactContainer fluid>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          { download }
      </div>
      <div className="row">
        { pairs }
      </div>
    </ReactContainer>
  );
};

export default Container;
