
import React, { PropTypes } from 'react';

import Button from './Button';
import Rating from './Rating';
import styles from './Card.css';

const Card = (props) => {
  const cardDetails = (props.cardData !== null) ? props.cardData : null;
  return (
    <div className={styles.cardContainer}>
      {cardDetails && cardDetails.map((card, index) =>
        <div className={styles.card} key={`key-${index}`}>
          <img src={card.image} alt={card.heading}/>
          <h2 children={card.heading} />
          <Rating value={4} />
          <p>{card.text} </p>
          <Button> Add to Cart</Button>

        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  /**
   * Card Data
  */
  cardData: PropTypes.arrayOf(PropTypes.shape({}))
};

export default Card;
