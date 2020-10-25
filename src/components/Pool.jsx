import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import Title from './Title';

const TokenDaily = {
  date: PropTypes.instanceOf(Date).isRequired,
  price_usd: PropTypes.number.isRequired,
};

const PoolPropTypes = {
  pairDailyList: PropTypes.arrayOf(TokenDaily).isRequired,
};

const LineChart = ({ pairDailyList }) => {
  const sortedPairDailyList = pairDailyList.sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );
  const labels = sortedPairDailyList.map((pairDaily) => pairDaily.date);
  const datasetsData = sortedPairDailyList.map((pairDaily) => pairDaily.price_usd);
  const data = {
    labels,
    datasets: [{
      label: 'Price USD',
      data: datasetsData,
    }],
  };
  return <Line data={data} />;
};
LineChart.propTypes = PoolPropTypes;

const Pool = ({ pairDailyList }) => (
  <>
    <Title title="Pair" />
    <LineChart pairDailyList={pairDailyList} />
  </>
);
Pool.propTypes = PoolPropTypes;

export default Pool;
