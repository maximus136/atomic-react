import React, { PropTypes } from 'react';

import { Avatar, Logo } from '../molecules';
import './Header.css';
import classnames from 'classnames';

const Header = (props) => {
  const { theme } = props;

  return (
    <div className="header">
      <Avatar
        className="avatar"
        {...props}
        picUrl="https://upload.wikimedia.org/wikipedia/commons/c/c1/J.J_Thomson.jpg"
        altTag="Sir JJ Thomson"
      />
      <div className="branding">
        <Logo
          imgWidth={80}
        />
        <h1 className={classnames(`acss-theme-${theme}`, 'acss-header')}>Atomic React</h1>
      </div>
    </div>
  );
};

Header.defaultProps = {
  size: 48
};

Header.propTypes = {
  /**
  * Theme
  */
  theme: PropTypes.oneOf(['light', 'dark'])
};

export default Header;
