import React from 'react';
import PropTypes from 'prop-types';
import { Container as ReactContainer, Button } from 'react-bootstrap';

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

const Container = ({ dataDict }) => (
  <ReactContainer fluid>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      <Download address={dataDict.address} />
    </div>
    <div className="row">
      <Portfolio dataDict={dataDict} />
    </div>
  </ReactContainer>
);
Container.propTypes = Portfolio.propTypes;

export default Container;
