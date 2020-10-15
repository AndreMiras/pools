import React from 'react';
import { Container as ReactContainer } from 'react-bootstrap'
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'

const Container = () => {
  return (
    <ReactContainer fluid>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
      </div>
    </ReactContainer>
  );
};

export default Container;
