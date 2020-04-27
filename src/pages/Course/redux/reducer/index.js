const initialState = {
  loading: false,
  info: undefined
};

const course = (state = initialState, action) => {
  switch (action.type) {
    case 'COURSE_CHANGE_STATE':
      return { ...state, ...action.payload };
    default: {
      return state;
    }
  }
};

export default course;
