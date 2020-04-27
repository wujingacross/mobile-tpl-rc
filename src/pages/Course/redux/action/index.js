import querystring from 'querystring';
import request from '@/common/request';
import { course } from '@/common/api';

export const fetchData = params => async dispatch => {
  const { data = {} } = await request({
    url: `${course}?${querystring.stringify(params)}`
  });
  console.log('www', data);
  dispatch({
    type: 'COURSE_CHANGE_STATE',
    payload: {
      info: data
    }
  });
};

export const changeState = payload => async dispatch => {
  dispatch({
    type: 'COURSE_CHANGE_STATE',
    payload
  });
};
