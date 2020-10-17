import React from 'react';
import PropTypes from 'prop-types';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';
import {
  Table, Accordion, Card, Button,
} from 'react-bootstrap';
import Pair from './Pair';

const PairsPropTypes = {
  dataDict: PropTypes.shape({
    address: PropTypes.string,
    pairs: PropTypes.arrayOf(Pair),
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
DebugResponse.propTypes = PairsPropTypes;

const Pairs = ({ dataDict }) => {
  const pairs = dataDict.pairs.map(
    (pairDict) => <Pair pairDict={pairDict} key={pairDict.contract_address} />,
  );
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Pool token balance</th>
            <th>Share</th>
            <th>Tokens balance</th>
            <th>Balance USD</th>
          </tr>
        </thead>
        <tbody>
          { pairs }
        </tbody>
      </Table>
      <DebugResponse dataDict={dataDict} />
    </div>
  );
};
Pairs.propTypes = PairsPropTypes;

export default Pairs;
