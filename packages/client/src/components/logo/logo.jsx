// external dependencies
import React from 'react';
import PropTypes from 'prop-types';

// stylesheets
import './logo.scss';

function Logo(props) {
  const { firstName, lastName, mobile } = props;

  console.log('rendering');

    return (
      <div id="logo" style={{ display: mobile ? 'none' : 'flex' }}>
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
    );
}

Logo.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  mobile: PropTypes.bool.isRequired,
};

export default Logo;
