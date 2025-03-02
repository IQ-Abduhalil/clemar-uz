const initialState = {
  open: false,
  likeCard: [],
};

export const CountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "openModal":
      return { ...state, open: true };
    case "closeModal":
      return { ...state, open: false };
    case "addLike":
      return {
        ...state,
        likeCard: state.likeCard.includes(action.payload)
          ? state.likeCard.filter((numb) => numb !== action.payload)
          : [...state.likeCard, action.payload],
      };
    default:
      return state;
  }
};
