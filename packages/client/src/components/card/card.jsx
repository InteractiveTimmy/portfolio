// external dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// internal dependencies
import SocialIcon from '../social-icon/social-icon';

// stylesheets
import './card.scss';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  }

  render() {
    const {
      children,
      content,
      image,
      offColor,
      subtitle,
      tabIndex,
      title,
    } = this.props;

    const { collapsed } = this.state;

    const imageElement = image ? (
      <div className="image" data-collapsed={collapsed}>
        <img alt={title} src={image} />
      </div>
    ) : undefined;

    const subtitleElement = subtitle ? (
      <div className="subtitle">{subtitle}</div>
    ) : undefined;

    const toggleContentElement = content ? (
      <div
        className="toggle-content"
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        role="button"
        tabIndex={tabIndex}
      >
        {collapsed ? 'Show More...' : 'Show Less...'}
      </div>
    ) : undefined;

    const linksElementGroup = children ? (
      <div className="links-group">
        <hr />
        <div className="links-list">
          {children}
        </div>
      </div>
    ) : undefined;

    return (
      <div className="card" data-off-color={offColor}>
        {imageElement}
        <div className="title">
          {title}
        </div>
        {subtitleElement}
        <div className="content" data-collapsed={collapsed}>
          {content}
        </div>
        {toggleContentElement}
        {linksElementGroup}
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([
        SocialIcon,
      ]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([
          SocialIcon,
        ]),
      }),
    ),
  ]),
  content: PropTypes.string,
  image: PropTypes.string,
  offColor: PropTypes.bool,
  subtitle: PropTypes.string,
  tabIndex: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

Card.defaultProps = {
  children: undefined,
  content: undefined,
  image: undefined,
  offColor: false,
  subtitle: undefined,
};

export default Card;
