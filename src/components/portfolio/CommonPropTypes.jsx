import PropTypes from 'prop-types';

const TokenPropTypes = {
  symbol: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
};

const TransactionPropTypes = {
  amount0: PropTypes.number.isRequired,
  amount1: PropTypes.number.isRequired,
  amountUSD: PropTypes.number.isRequired,
  liquidity: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const PairDictPropTypes = {
  contract_address: PropTypes.string.isRequired,
  owner_balance: PropTypes.number.isRequired,
  price_usd: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  share: PropTypes.number.isRequired,
  balance_usd: PropTypes.number.isRequired,
  tokens: PropTypes.arrayOf(PropTypes.shape(TokenPropTypes).isRequired).isRequired,
  transactions: PropTypes.arrayOf(PropTypes.shape(TransactionPropTypes).isRequired).isRequired,
};

export { PairDictPropTypes, TokenPropTypes, TransactionPropTypes };
