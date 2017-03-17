import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCatelogCards } from './../actions/cardContainer-actions';

import CardContainer from './../organisms/CardContainer';

const mapStateToProps = (state) => {
  return {
    cardData: state.CardContinerPage.cardData
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCatelogCards
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
