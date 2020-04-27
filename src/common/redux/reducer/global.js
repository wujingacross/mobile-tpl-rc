const global = (
  state = {
    loading: false
  },
  { type, payload }
) => {
  switch (type) {
    case 'global/changeState':
      return { ...state, ...payload };
    default:
      return { ...state };
  }
};

export default global;
