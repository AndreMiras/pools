import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TokenPropTypes from './TokenPropTypes';

const Dialog = ({
  title, body, show, onHide,
}) => (
  // note animation is disabled to workaround an upstream issue:
  // https://github.com/react-bootstrap/react-bootstrap/issues/5075
  <Modal show={show} onHide={onHide} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {body}
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
  body: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

const TransactionPropTypes = PropTypes.shape({
  amount0: PropTypes.string.isRequired,
  amount1: PropTypes.string.isRequired,
  amountUSD: PropTypes.string.isRequired,
  liquidity: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

const PairDetails = ({ pairDict, show, onHide }) => {
  const title = `${pairDict.pair_symbol} pair details`;
  const body = (
    <pre>
      {JSON.stringify(pairDict.transactions, null, 2)}
    </pre>
  );

  return <Dialog title={title} body={body} show={show} onHide={onHide} />;
};
PairDetails.propTypes = {
  pairDict: PropTypes.shape({
    contract_address: PropTypes.string.isRequired,
    owner_balance: PropTypes.number.isRequired,
    pair_symbol: PropTypes.string.isRequired,
    share: PropTypes.number.isRequired,
    balance_usd: PropTypes.number.isRequired,
    tokens: PropTypes.arrayOf(TokenPropTypes).isRequired,
    transactions: PropTypes.arrayOf(TransactionPropTypes).isRequired,
  }).isRequired,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default PairDetails;
