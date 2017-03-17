import React, { PropTypes } from 'react';
import styles from './Footer.css';


const Footer = ({ ...props }) => {
  return (
    <div className={styles.footer}>

      <ul>
        {props.links.map((link, index) =>
          <li key={`key-${index}`}><a key={link.name} href={link.url}>{link.title}</a></li>
        )}
      </ul>

      <span> © Copyright {props.currentYear} mySite.com </span>
    </div>
  );
};

Footer.propTypes = {
  /**
   * Links Array
  */
  links: PropTypes.arrayOf(PropTypes.shape({})),
  /**
   * Current Year
  */
  currentYear: PropTypes.number
};

export default Footer;
