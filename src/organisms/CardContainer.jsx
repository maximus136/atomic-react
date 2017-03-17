import React, { Component, PropTypes } from 'react';

import { Card } from '../molecules';

/* import styles from './CardContainer.css'; */
//  const cards = Array.from({ length: 3 }, (c) => card)
// const primary = /^\#/.test(colors.primary) ? colors.primary.replace('#', '') : '#666'
// const primary = '#ff6600';


class CardContainer extends Component {
  componentWillMount() {
    this.props.fetchCatelogCards();
  }

  render() {
    const { cardData } = this.props;
    const data = (Object.keys(cardData).length) === 0 ? null : cardData.data;

    return (
      <div>{<Card cardData={data}/>}</div>
    );
  }
}

CardContainer.propTypes = {
  /**
   * Card Data as Object
  */
  cardData: PropTypes.object,
  /**
   * Function called to get data
  */
  fetchCatelogCards: PropTypes.func
};

export default CardContainer;
