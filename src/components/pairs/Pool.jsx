import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Col, Row } from 'react-bootstrap';
import Title from '../core/Title';

const DatePrice = PropTypes.shape({
  date: PropTypes.string.isRequired,
  price_usd: PropTypes.number.isRequired,
}).isRequired;

const PairsDailyPair = {
  price_usd: PropTypes.number.isRequired,
  reserve_usd: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  total_supply: PropTypes.number.isRequired,
};

const DatePriceList = PropTypes.arrayOf(DatePrice).isRequired;

const PairsDaily = {
  pair: PropTypes.shape(PairsDailyPair).isRequired,
  date_price: DatePriceList,
};

const PoolPropTypes = {
  pairsDaily: PropTypes.shape(PairsDaily).isRequired,
};

const LineChart = ({ datePrice }) => {
  const sortedPairDailyList = datePrice.sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );
  const labels = sortedPairDailyList.map((pairDaily) => pairDaily.date);
  const datasetsData = sortedPairDailyList.map((pairDaily) => pairDaily.price_usd.toFixed(2));
  const data = {
    labels,
    datasets: [{
      label: 'Price USD',
      data: datasetsData,
    }],
  };
  const options = {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'day',
        },
      }],
    },
  };
  return <Line data={data} options={options} />;
};
LineChart.propTypes = DatePriceList;

const Pool = ({ pairsDaily }) => (
  <>
    <Title title={`Pair ${pairsDaily.pair.symbol} $${pairsDaily.pair.price_usd.toFixed(2)}`} />
    <Row>
      <Col xs={10}>
        <LineChart datePrice={pairsDaily.date_price} />
      </Col>
    </Row>
  </>
);
Pool.propTypes = PoolPropTypes;

export default Pool;
