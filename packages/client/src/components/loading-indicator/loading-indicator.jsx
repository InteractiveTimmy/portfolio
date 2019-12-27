// external dependencies
import React from 'react';
import PropTypes from 'prop-types';

// internal dependencies
import Card from '../card/card';

// stylesheets
import './loading-indicator.scss';

function LoadingIndicator(props) {
  const { title, offColor } = props;
  return (
    <Card key={title} offColor={offColor} title="..." />
  );
}

LoadingIndicator.props = {
  offColor: PropTypes.bool,
};

LoadingIndicator.defaultProps = {
  offColor: false,
};

export default LoadingIndicator;
