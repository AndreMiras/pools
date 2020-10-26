import React from 'react';
import PropTypes from 'prop-types';

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

export default EtherscanTokenLink;
