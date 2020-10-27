import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import 'chartjs-plugin-colorschemes/dist/chartjs-plugin-colorschemes.min';
import {
  Accordion, Button, Card, Col, Row,
} from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import Pairs from './Pairs';
import Title from '../core/Title';
import { portfolioUrl } from '../../utils/api';

const PortfolioPropTypes = {
  dataDict: PropTypes.shape({
    address: PropTypes.string.isRequired,
    balance_usd: PropTypes.number.isRequired,
    pairs: Pairs.isRequired,
  }).isRequired,
};

const Download = ({ address }) => (
  <Button variant="primary" size="sm" href={portfolioUrl(address)}>
    <FontAwesomeIcon icon="download" />
    {' '}
    Download
  </Button>
);
Download.propTypes = {
  address: PropTypes.string.isRequired,
};

const DoughnutChart = ({ dataDict }) => {
  const balance = dataDict.balance_usd;
  const datasetsData = dataDict.pairs.map(
    (pairDict) => Math.round(100 * pairDict.balance_usd / balance),
  );
  const labels = dataDict.pairs.map(
    (pairDict) => pairDict.symbol,
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
        scheme: 'brewer.SetOne9',
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
  <>
    <Title title="Portfolio" extraComponent={<Download address={dataDict.address} />} />
    <Row>
      <h3>
        Liquidity provider balance: $
        { dataDict.balance_usd.toFixed(2) }
      </h3>
    </Row>
    <Row>
      <Col xs={7}>
        <DoughnutChart dataDict={dataDict} />
      </Col>
    </Row>
    <Row>
      <Pairs address={dataDict.address} pairs={dataDict.pairs} />
    </Row>
    <Row>
      <DebugResponse dataDict={dataDict} />
    </Row>
  </>
);
Portfolio.propTypes = PortfolioPropTypes;

export default Portfolio;
