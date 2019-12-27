// external dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// stylesheets
import './navigation-item.scss';

class NavigationItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { target } = this.props;

    window.scrollTo(0, target.current.offsetTop);
  }

  render() {
    const { tabIndex, text } = this.props;

    return (
      <div
        className="navigation-item"
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        role="button"
        tabIndex={tabIndex}
      >
        {text}
      </div>
    );
  }
}

NavigationItem.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  target: PropTypes.objectOf(PropTypes.any).isRequired,
  text: PropTypes.string.isRequired,
};

export default NavigationItem;
