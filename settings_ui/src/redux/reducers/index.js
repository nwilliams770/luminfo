import { combineReducers } from 'redux';
import ambient from './ambientReducer';
import notifications from './notificationsReducer';

const reducers = combineReducers({
  ambient,
  notifications
});

// https://stackoverflow.com/questions/41497277/how-to-hydrate-redux-store-after-login
const rootReducer = (state={}, action) => {
  if (action.type === "HYDRATE") {
    return action.payload;
  } else {
    return reducers(state, action);
  }
}

export default rootReducer;
