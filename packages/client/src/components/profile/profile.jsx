// external dependencies
import React from 'react';
import PropTypes from 'prop-types';

// components
import SocialIcon from '../social-icon/social-icon';

// stylesheets
import './profile.scss';

function Profile(props) {
  const {
    blurb,
    children,
    image,
    title,
  } = props;

  return (
    <div id="profile">
      <div className="image">
        <img alt={title} src={image} />
      </div>
      <div className="text">
        <div className="title">{title}</div>
        <div className="blurb">{blurb}</div>
      </div>
      <div className="links">
        {children}
      </div>
    </div>
  );
}

Profile.propTypes = {
  blurb: PropTypes.string.isRequired,
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
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Profile.defaultProps = {
  children: [],
};

export default Profile;
