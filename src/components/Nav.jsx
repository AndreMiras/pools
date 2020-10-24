import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavDropdown } from 'react-bootstrap';

const AddressForm = ({ onAddress, loading }) => {
  const [address, setAddress] = useState();
  const icon = loading ? 'spinner' : 'search';
  const onSubmit = (e) => {
    e.preventDefault();
    onAddress(address);
  };

  return (
    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" onSubmit={onSubmit}>
      <div className="input-group">
        <input type="text" className="form-control bg-light border-0 small" placeholder="Ethereum address" aria-label="Address" aria-describedby="basic-addon2" onChange={(e) => { setAddress(e.target.value); }} />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit" onClick={onSubmit}>
            <FontAwesomeIcon className="fa-sm" icon={icon} pulse={loading} />
          </button>
        </div>
      </div>
    </form>
  );
};
AddressForm.propTypes = {
  onAddress: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
AddressForm.defaultProps = {
  loading: false,
};

const Nav = ({ onAddress, loading }) => (
  <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" type="button">
      <i className="fa fa-bars" />
    </button>

    <AddressForm onAddress={onAddress} loading={loading} />

    <ul className="navbar-nav ml-auto">

      <div className="topbar-divider d-none d-sm-block" />

      <NavDropdown title="0x00000...0000" id="nav-dropdown" className="mr-2 d-none d-lg-inline small">
        <NavDropdown.Item>Profile</NavDropdown.Item>
        <NavDropdown.Item>Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Logout</NavDropdown.Item>
      </NavDropdown>

    </ul>

  </nav>
);
Nav.propTypes = AddressForm.propTypes;

export default Nav;
