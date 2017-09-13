import { combineReducers } from 'redux';
import ReduceWeather from './reduce_weather';

const rootReducer = combineReducers({
  weather: ReduceWeather
});

export default rootReducer;
