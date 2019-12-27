// external dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import NavigationItem from '../navigation-item/navigation-item';

// stylesheets
import './navigation.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      atTop: false,
    };
  }

  render() {
    const { children, mobile } = this.props;
    const { atTop } = this.state;

    return (
      <nav className={atTop ? 'top' : ''} style={{ flexGrow: mobile ? 1 : 0 }}>
        {children}
      </nav>
    );
  }
}

Navigation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([
        NavigationItem,
      ]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([
          NavigationItem,
        ]),
      }),
    ),
  ]).isRequired,
  mobile: PropTypes.bool.isRequired,
};

export default Navigation;
