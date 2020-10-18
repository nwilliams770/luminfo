import React, {useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { hydrateState } from '../../../redux/actions';
import store from '../../../redux/store';

import Accordion from '../../Accordion';

const UserContainer = (props) => {
  useEffect(() => {
    // spinner state true
    fetchInitialState();
    console.log("*******props!", props);
    props.hydrateState().then(() => {
      console.log("props*****", store.getState());
      // spinner state false
    })
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
    <div>
      <Accordion />
      <Accordion />
      <Accordion />

    </div>
  )
};


export default connect(null, {hydrateState})(UserContainer);
