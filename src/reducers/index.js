import { combineReducers } from 'redux';
import CardContainerReducer from './CardContainer-reducer';
const rootReducer = combineReducers({
  CardContinerPage: CardContainerReducer
});

export default rootReducer;
