// external dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Card from '../card/card';
import LoadingIndicator from '../loading-indicator/loading-indicator';
import Profile from '../profile/profile';

// stylesheets
import './section.scss';

class Section extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {
      children,
      offColor,
      reference,
      title,
    } = this.props;

    const titleElement = title ? (<div className="title">{title}</div>) : '';

    const content = children || (<LoadingIndicator />);

    return (
      <section id={title} data-off-color={offColor} ref={reference}>
        {titleElement}
        <div className="cards">
          {content}
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([
        Card,
        Profile,
      ]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([
          Card,
        ]),
      }),
    ),
  ]),
  offColor: PropTypes.bool,
  reference: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string,
};

Section.defaultProps = {
  children: [],
  offColor: false,
  title: undefined,
};

export default Section;
