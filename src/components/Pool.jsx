import React from 'react';
import PropTypes from 'prop-types';

const TokenDaily = {
  date: PropTypes.instanceOf(Date).isRequired,
  price_usd: PropTypes.number.isRequired,
};

const Pool = ({ pairDailyList }) => (
  <>
    <p>Pool page</p>
    <pre>
      {JSON.stringify(pairDailyList, null, 2)}
    </pre>
  </>
);
Pool.propTypes = {
  pairDailyList: PropTypes.arrayOf(TokenDaily).isRequired,
};

export default Pool;
