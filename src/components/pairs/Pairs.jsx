import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import EtherscanTokenLink from '../core/EtherscanTokenLink';

const PairPropTypes = {
  pairDict: PropTypes.shape({
    id: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price_usd: PropTypes.number.isRequired,
    reserve_usd: PropTypes.number.isRequired,
  }).isRequired,
};
const Pair = ({ pairDict }) => {
  const decimalPlace = 2;
  return (
    <tr>
      <td>
        <EtherscanTokenLink text={pairDict.symbol} tokenAddress={pairDict.id} />
      </td>
      <td>
        <Link to={`/pairs/${pairDict.id}`}>
          $
          { pairDict.price_usd.toFixed(decimalPlace) }
        </Link>
      </td>
      <td>
        $
        {pairDict.reserve_usd.toFixed(0)}
      </td>
    </tr>
  );
};
Pair.propTypes = PairPropTypes;

const Pairs = ({ pairs }) => {
  const pairsComponents = pairs.map((pairDict) => <Pair pairDict={pairDict} key={pairDict.id} />);
  return (
    <Table>
      <thead>
        <tr>
          <th>Pair</th>
          <th>Price</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        { pairsComponents }
      </tbody>
    </Table>
  );
};
Pairs.propTypes = {
  pairs: PropTypes.arrayOf(PairPropTypes.pairDict).isRequired,
};

export default Pairs;
