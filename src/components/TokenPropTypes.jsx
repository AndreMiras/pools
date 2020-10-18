import PropTypes from 'prop-types';

const TokenPropTypes = PropTypes.shape({
  symbol: PropTypes.string.isRequired,
  balance: PropTypes.number,
});

export default TokenPropTypes;
