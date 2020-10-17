import React from 'react';
import PropTypes from 'prop-types';
import { Container as ReactContainer, Button } from 'react-bootstrap';

import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPortfolioUrl } from '../utils/api';
import Portfolio from './Portfolio';

const Download = ({ address }) => (
  <Button variant="primary" size="sm" href={getPortfolioUrl(address)}>
    <FontAwesomeIcon icon="download" />
    {' '}
    Download
  </Button>
);
Download.propTypes = {
  address: PropTypes.string.isRequired,
};

const Container = ({ dataDict }) => {
  const portfolio = dataDict ? <Portfolio dataDict={dataDict} /> : null;
  const download = dataDict ? <Download address={dataDict.address} /> : null;
  return (
    <ReactContainer fluid>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        { download }
      </div>
      <div className="row">
        { portfolio }
      </div>
    </ReactContainer>
  );
};
Container.propTypes = Portfolio.propTypes;
Container.defaultProps = {
  dataDict: null,
};

export default Container;
