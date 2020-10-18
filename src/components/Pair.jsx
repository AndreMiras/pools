import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PairDictPropTypes } from './CommonPropTypes';
import PairDetails from './PairDetails';

const EtherscanTokenLink = ({ text, tokenAddress, ownerAddress }) => {
  const holderSuffix = ownerAddress ? `?a=${ownerAddress}` : '';
  const url = `https://etherscan.io/token/${tokenAddress}${holderSuffix}`;
  return (
    <a href={url}>{ text }</a>
  );
};
EtherscanTokenLink.propTypes = {
  text: PropTypes.string.isRequired,
  tokenAddress: PropTypes.string.isRequired,
  ownerAddress: PropTypes.string,
};
EtherscanTokenLink.defaultProps = {
  ownerAddress: null,
};

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
        <EtherscanTokenLink text={pairDict.pair_symbol} tokenAddress={pairDict.contract_address} />
      </td>
      <td>
        <EtherscanTokenLink
          text={pairDict.owner_balance.toFixed(decimalPlace)}
          tokenAddress={pairDict.contract_address}
          ownerAddress={address}
        />
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
