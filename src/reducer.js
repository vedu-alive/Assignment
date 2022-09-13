export const initialState = {
  bookings: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "BOOK":
      return {
        ...state,
        bookings: [...state.bookings, action.book],
      };
    default:
      return { ...state };
  }
};

export default reducer;
