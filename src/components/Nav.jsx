import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavDropdown } from 'react-bootstrap'
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'


const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
      </button>

      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <FontAwesomeIcon className="fa-sm" icon="search" />
            </button>
          </div>
        </div>
      </form>

      <ul className="navbar-nav ml-auto">

        <div className="topbar-divider d-none d-sm-block"></div>

        <NavDropdown title="0x00000...0000" id="nav-dropdown" className="mr-2 d-none d-lg-inline small">
          <NavDropdown.Item>Profile</NavDropdown.Item>
          <NavDropdown.Item>Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Logout</NavDropdown.Item>
        </NavDropdown>

      </ul>

    </nav>
  );
};

export default Nav;

