import { combineReducers } from 'redux';
import global from '@/common/redux/reducer/global';
import course from '@/pages/Course/redux/reducer';

export default combineReducers({
  global,
  course
});
