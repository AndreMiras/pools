import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PairDictPropTypes } from './CommonPropTypes';
import PairDetails from './PairDetails';
import EtherscanTokenLink from '../core/EtherscanTokenLink';

const PairDetailsLink = ({ onClick }) => (
  <Button type="link" onClick={onClick}>Details</Button>
);
PairDetailsLink.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Pair = ({ address, pairDict }) => {
  const [showDetails, setShowDetails] = useState(false);
  const token0 = pairDict.tokens[0];
  const token1 = pairDict.tokens[1];
  const decimalPlace = 2;
  return (
    <tr>
      <td>
        <EtherscanTokenLink text={pairDict.symbol} tokenAddress={pairDict.contract_address} />
      </td>
      <td>
        <EtherscanTokenLink
          text={pairDict.owner_balance.toFixed(decimalPlace)}
          tokenAddress={pairDict.contract_address}
          ownerAddress={address}
        />
      </td>
      <td>
        <Link to={`/pairs/${pairDict.contract_address}`}>
          $
          { pairDict.price_usd.toFixed(decimalPlace) }
        </Link>
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
      <td>
        <PairDetails pairDict={pairDict} show={showDetails} onHide={() => setShowDetails(false)} />
        <PairDetailsLink onClick={() => setShowDetails(true)} />
      </td>
    </tr>
  );
};
Pair.propTypes = {
  address: PropTypes.string.isRequired,
  pairDict: PropTypes.shape(PairDictPropTypes).isRequired,
};

export default Pair;
