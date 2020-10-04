import { HYDRATE } from './actionTypes';
import axios from 'axios';

export const hydrateState = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:8100/settings');
    dispatch({
      type: HYDRATE,
      payload: res.data
    });
  }
  catch(e) {
    // dispatch({
    //   type: USERS_ERROR,
    //   payload: console.log(e),
    // })
    console.log("error hydrating", e);
  }
};