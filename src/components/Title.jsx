import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, extraComponent }) => (
  <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">{title}</h1>
    {extraComponent}
  </div>
);
Title.propTypes = {
  title: PropTypes.string.isRequired,
  extraComponent: PropTypes.element,
};
Title.defaultProps = {
  extraComponent: null,
};

export default Title;
