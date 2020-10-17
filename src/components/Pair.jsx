import React from 'react';
import PropTypes from 'prop-types';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';

const EtherscanTokenLink = ({ address, text }) => {
  const url = `https://etherscan.io/token/${address}`;
  return (
    <a href={url}>{ text }</a>
  );
};
EtherscanTokenLink.propTypes = {
  address: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const TokenPropTypes = {
  symbol: PropTypes.string,
  price: PropTypes.number,
  balance: PropTypes.number,
  balance_usd: PropTypes.number,
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
Pair.propTypes = {
  pairDict: PropTypes.shape({
    contract_address: PropTypes.string.isRequired,
    owner_balance: PropTypes.number.isRequired,
    pair_symbol: PropTypes.string.isRequired,
    share: PropTypes.number.isRequired,
    balance_usd: PropTypes.number.isRequired,
    tokens: PropTypes.arrayOf(TokenPropTypes).isRequired,
  }).isRequired,
};

export default Pair;
