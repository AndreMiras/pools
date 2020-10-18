import PropTypes from 'prop-types';

const TokenPropTypes = PropTypes.shape({
  symbol: PropTypes.string.isRequired,
  balance: PropTypes.number,
});

const TransactionPropTypes = PropTypes.shape({
  amount0: PropTypes.string.isRequired,
  amount1: PropTypes.string.isRequired,
  amountUSD: PropTypes.string.isRequired,
  liquidity: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

const PairDictPropTypes = {
  contract_address: PropTypes.string.isRequired,
  owner_balance: PropTypes.number.isRequired,
  pair_symbol: PropTypes.string.isRequired,
  share: PropTypes.number.isRequired,
  balance_usd: PropTypes.number.isRequired,
  tokens: PropTypes.arrayOf(TokenPropTypes).isRequired,
  transactions: PropTypes.arrayOf(TransactionPropTypes).isRequired,
};

export { PairDictPropTypes, TokenPropTypes, TransactionPropTypes };
