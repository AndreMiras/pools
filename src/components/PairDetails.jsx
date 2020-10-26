import React from 'react';
import {
  Button, Modal, Tab, Tabs,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { PairDictPropTypes, TokenPropTypes, TransactionPropTypes } from './CommonPropTypes';

const Dialog = ({
  title, children, show, onHide,
}) => (
  // note animation is disabled to workaround an upstream issue:
  // https://github.com/react-bootstrap/react-bootstrap/issues/5075
  <Modal show={show} onHide={onHide} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {children}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);
Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

const OverviewTokenDetail = ({ token }) => (
  <>
    {token.symbol}
    <ul>
      <li>
        Balance:
        {token.balance}
      </li>
      <li>
        Price:
        {token.price}
      </li>
      <li>
        Total USD: $
        {token.balance_usd}
      </li>
    </ul>
  </>
);
OverviewTokenDetail.propTypes = PropTypes.shape(TokenPropTypes).isRequired;

const OverviewTab = ({ pairDict }) => (
  <>
    {pairDict.tokens.map((token) => <OverviewTokenDetail token={token} key={token.symbol} />)}
  </>
);
OverviewTab.propTypes = PropTypes.shape(PairDictPropTypes).isRequired;

const TransactionsTab = ({ transactions }) => (
  <pre>
    {JSON.stringify(transactions, null, 2)}
  </pre>
);
TransactionsTab.propTypes = PropTypes.shape(TransactionPropTypes).isRequired;

const DebugTab = ({ pairDict }) => (
  <pre>
    {JSON.stringify(pairDict, null, 2)}
  </pre>
);
DebugTab.propTypes = PropTypes.shape(PairDictPropTypes).isRequired;

const PairDetailsTabs = ({ pairDict }) => (
  // note transition is disabled to workaround an upstream issue:
  // https://github.com/react-bootstrap/react-bootstrap/issues/5075
  <Tabs defaultActiveKey="overview" transition={false}>
    <Tab eventKey="overview" title="Overview">
      <OverviewTab pairDict={pairDict} />
    </Tab>
    <Tab eventKey="transactions" title="Transactions">
      <TransactionsTab transactions={pairDict.transactions} />
    </Tab>
    <Tab eventKey="debug" title="Debug">
      <DebugTab pairDict={pairDict} />
    </Tab>
  </Tabs>
);
PairDetailsTabs.propTypes = PropTypes.shape(PairDictPropTypes).isRequired;

const PairDetails = ({ pairDict, show, onHide }) => {
  const title = `${pairDict.symbol} pair details`;
  return (
    <Dialog title={title} show={show} onHide={onHide}>
      <PairDetailsTabs pairDict={pairDict} />
    </Dialog>
  );
};
PairDetails.propTypes = {
  pairDict: PropTypes.shape(PairDictPropTypes).isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default PairDetails;
