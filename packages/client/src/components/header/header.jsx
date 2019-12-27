// external dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

// stylesheets
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transparent: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this), true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this), true);
  }

  handleScroll() {
    if (window.scrollY === 0) {
      this.setState({
        transparent: false,
      });
    } else {
      this.setState({
        transparent: true,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { transparent } = this.state;

    return (
      <header data-transparent={transparent}>
        {children}
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([
        Logo,
        Navigation,
      ]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([
          Logo,
          Navigation,
        ]),
      }),
    ),
  ]).isRequired,
};

export default Header;
