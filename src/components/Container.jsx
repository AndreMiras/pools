import React from 'react';
import { Container as ReactContainer } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pairs from './Pairs';



const Container = ({dataDict}) => {
  const pairs = dataDict ? <Pairs dataDict={ dataDict } /> : null;
  return (
    <ReactContainer fluid>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <Button variant="primary" size="sm">
            <FontAwesomeIcon icon="download" /> Generate Report
          </Button>
      </div>
      <div className="row">
        { pairs }
      </div>
    </ReactContainer>
  );
};

export default Container;
