import React from 'react';
import PropTypes from 'prop-types';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';
import { Table } from 'react-bootstrap';
import Pair from './Pair';

const Pairs = ({ pairs }) => {
  const pairsComponents = pairs.map(
    (pairDict) => <Pair pairDict={pairDict} key={pairDict.contract_address} />,
  );
  return (
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
        { pairsComponents }
      </tbody>
    </Table>
  );
};
Pairs.propTypes = {
  pairs: PropTypes.arrayOf(Pair.propTypes.pairDict).isRequired,
};

export default Pairs;
