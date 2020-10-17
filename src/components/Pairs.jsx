import React from 'react';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';
import {
  Table, Accordion, Card, Button,
} from 'react-bootstrap';
import { number, func } from 'prop-types';

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

const EtherscanTokenLink = ({ address, text }) => {
  const url = `https://etherscan.io/token/${address}`;
  return (
    <a href={url}>{ text }</a>
  );
};

const Pair = ({ pairDict }) => {
  const token0 = pairDict.tokens[0];
  const token1 = pairDict.tokens[1];
  const decimalPlace = 2;
  return (
    <tr>
      <td>
        <EtherscanTokenLink address={pairDict.contract_address} text={pairDict.pair_symbol} />
      </td>
      <td>
        { pairDict.owner_balance.toFixed(decimalPlace) }
      </td>
      <td>
        { pairDict.share.toFixed(decimalPlace) }
        %
      </td>
      <td>
        { token0.balance.toFixed(decimalPlace) }
        {' '}
        { token0.symbol }
        {' '}
        +
        {' '}
        { token1.balance.toFixed(decimalPlace) }
        {' '}
        +
        {' '}
        { token1.symbol }
      </td>
      <td>
        $
        { pairDict.balance_usd.toFixed(decimalPlace) }
      </td>
    </tr>
  );
};

const Pairs = ({ dataDict }) => {
  const pairs = dataDict.pairs.map((pairDict) => <Pair pairDict={pairDict} key={pairDict.contract_address} />);
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

export default Pairs;
