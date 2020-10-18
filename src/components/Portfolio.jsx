import React from 'react';
import PropTypes from 'prop-types';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';
import { Accordion, Card, Button } from 'react-bootstrap';
import Pairs from './Pairs';

const PortfolioPropTypes = {
  dataDict: PropTypes.shape({
    address: PropTypes.string.isRequired,
    pairs: Pairs.isRequired,
  }).isRequired,
};

const DebugResponse = ({ dataDict }) => (
  <Accordion>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          See full JSON response
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0" animation="false">
        <Card.Body>
          <pre>
            {JSON.stringify(dataDict, null, 2)}
          </pre>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);
DebugResponse.propTypes = PortfolioPropTypes;

const Portfolio = ({ dataDict }) => (
  <div>
    <Pairs address={dataDict.address} pairs={dataDict.pairs} />
    <DebugResponse dataDict={dataDict} />
  </div>
);
Portfolio.propTypes = PortfolioPropTypes;

export default Portfolio;
