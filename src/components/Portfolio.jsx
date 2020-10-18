import React from 'react';
import PropTypes from 'prop-types';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';
import { SetOne9 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';
import { Accordion, Card, Button } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import Pairs from './Pairs';

const PortfolioPropTypes = {
  dataDict: PropTypes.shape({
    address: PropTypes.string.isRequired,
    balance_usd: PropTypes.number.isRequired,
    pairs: Pairs.isRequired,
  }).isRequired,
};

const DoughnutChart = ({ dataDict }) => {
  const balance = dataDict.balance_usd;
  const datasetsData = dataDict.pairs.map(
    (pairDict) => Math.round(100 * pairDict.balance_usd / balance),
  );
  const labels = dataDict.pairs.map(
    (pairDict) => pairDict.pair_symbol,
  );
  const data = {
    labels,
    datasets: [{
      label: 'Portfolio share',
      data: datasetsData,
    }],
  };
  const options = {
    plugins: {
      colorschemes: {
        scheme: SetOne9,
      },
    },
  };
  return <Doughnut data={data} options={options} />;
};
DoughnutChart.propTypes = PortfolioPropTypes;

const DebugResponse = ({ dataDict }) => (
  <Accordion>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          See full JSON response
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0" animation="false">
        <Card.Body>
          <pre>
            {JSON.stringify(dataDict, null, 2)}
          </pre>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);
DebugResponse.propTypes = PortfolioPropTypes;

const Portfolio = ({ dataDict }) => (
  <div>
    <h3>
      Liquidity provider balance: $
      { dataDict.balance_usd.toFixed(2) }
    </h3>
    <DoughnutChart dataDict={dataDict} />
    <Pairs address={dataDict.address} pairs={dataDict.pairs} />
    <DebugResponse dataDict={dataDict} />
  </div>
);
Portfolio.propTypes = PortfolioPropTypes;

export default Portfolio;
