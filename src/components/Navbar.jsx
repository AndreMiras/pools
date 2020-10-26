import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CollapsedNavItem = ({ innerButton, children }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const divClass = show ? 'show' : '';
  const buttonClass = show ? '' : 'collapsed';

  return (
    <>
      <Button
        variant="link"
        className={`nav-link ${buttonClass}`}
        data-toggle="collapse"
        aria-expanded={show}
        onClick={() => toggleShow()}
      >
        {innerButton}
      </Button>
      <div className={`collapse ${divClass}`}>
        {children}
      </div>
    </>
  );
};
CollapsedNavItem.propTypes = {
  innerButton: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
};

const SourceCodeNavItem = () => {
  const innerButton = (
    <>
      <FontAwesomeIcon className="fa-fw mr-1" icon="code" />
      {' '}
      <span>Source code</span>
    </>
  );
  const children = (
    <div className="bg-white py-2 collapse-inner rounded">
      <h6 className="collapse-header">Frontend:</h6>
      <a className="collapse-item" href="https://github.com/AndreMiras/pools">AndreMiras/pools</a>
      <div className="collapse-divider" />
      <h6 className="collapse-header">Backend:</h6>
      <a className="collapse-item" href="https://github.com/AndreMiras/pools-api">AndreMiras/pools-api</a>
      <a className="collapse-item" href="https://github.com/AndreMiras/libpools">AndreMiras/libpools</a>
    </div>
  );
  return (
    <CollapsedNavItem innerButton={innerButton}>
      {children}
    </CollapsedNavItem>
  );
};

const Navbar = () => (
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <a className="sidebar-brand d-flex align-items-center justify-content-center" href={process.env.PUBLIC_URL}>
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink" />
      </div>
      <div className="sidebar-brand-text mx-3">
        Pools
      </div>
    </a>

    <hr className="sidebar-divider my-0" />

    <li className="nav-item active">
      <a className="nav-link" href={process.env.PUBLIC_URL}>
        <FontAwesomeIcon className="fa-fw mr-1" icon="tachometer-alt" />
        <span>Dashboard</span>
      </a>
    </li>

    <hr className="sidebar-divider" />

    <div className="sidebar-heading">
      Interface
    </div>

    <li className="nav-item">
      <Link to="/pairs">
        <Button variant="link" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <FontAwesomeIcon className="fa-cog mr-1" icon="chart-pie" />
          <span>Pools</span>
        </Button>
      </Link>
    </li>

    <hr className="sidebar-divider" />

    <div className="sidebar-heading">
      Links
    </div>

    <li className="nav-item">
      <SourceCodeNavItem />
    </li>

    <li className="nav-item">

      <Link className="nav-link" to="/changelog">
        <FontAwesomeIcon className="fa-fw mr-1" icon="list" />
        <span>Changelog</span>
      </Link>
    </li>

    <hr className="sidebar-divider d-none d-md-block" />

    <div className="text-center d-none d-md-inline">
      <button className="rounded-circle border-0" id="sidebarToggle" type="button" aria-label="Toggle sidebar" />
    </div>

  </ul>
);

export default Navbar;
