// external dependencies
import React from 'react';
import PropTypes from 'prop-types';

// internal dependencies
import { openUrl } from '../../utils/index';

// stylesheets
import './social-icon.scss';

function SocialIcon(props) {
  const {
    hoverable,
    image,
    link,
    tabIndex,
    title,
  } = props;

  return (
    <div
      className="social-icon"
      onClick={() => openUrl(link, 'new')}
      onKeyDown={() => openUrl(link, 'new')}
      role="button"
      tabIndex={tabIndex}
      data-hover={hoverable}
    >
      <img alt={title} src={image} />
    </div>
  );
}

SocialIcon.propTypes = {
  hoverable: PropTypes.bool,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

SocialIcon.defaultProps = {
  hoverable: false,
};

export default SocialIcon;
