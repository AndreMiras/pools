import React from 'react';
import PropTypes from 'prop-types';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';

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

const TokenPropTypes = PropTypes.shape({
  symbol: PropTypes.string.isRequired,
  balance: PropTypes.number,
});

const Pair = ({ address, pairDict }) => {
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
    </tr>
  );
};
Pair.propTypes = {
  address: PropTypes.string.isRequired,
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
