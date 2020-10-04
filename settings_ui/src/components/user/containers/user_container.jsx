import React, {useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { hydrateState } from '../../../redux/actions';

const UserContainer = (props) => {
  useEffect(() => {
    // fetchInitialState();
    props.hydrateState();
  }, [])

  async function fetchInitialState() {
    try {
      const response = await axios.get('http://localhost:8100/settings');
      const data = response.data;
      console.log("data!", data);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div></div>
  )
};


export default connect(null, {hydrateState})(UserContainer);
