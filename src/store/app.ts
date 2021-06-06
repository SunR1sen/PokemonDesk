const initialState = {
    isLoading: false,
}

const app = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case 'LOAD':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default app;