import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import Pair from './Pair';

const Pairs = ({ address, pairs }) => {
  const pairsComponents = pairs.map(
    (pairDict) => <Pair address={address} pairDict={pairDict} key={pairDict.contract_address} />,
  );
  return (
    <Table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Pool token balance</th>
          <th>Price</th>
          <th>Share</th>
          <th>Tokens balance</th>
          <th>Balance USD</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        { pairsComponents }
      </tbody>
    </Table>
  );
};
Pairs.propTypes = {
  address: PropTypes.string.isRequired,
  pairs: PropTypes.arrayOf(Pair.propTypes.pairDict).isRequired,
};

export default Pairs;
