export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action?.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };

    case "FILTER_BY_STOCK":
      return { ...state, byStock: !state.byStock };

    case "SORT_BY_DELIVERY":
      return { ...state, byFastdelivery: !state.byFastdelivery };

    case "SORT_BY_SEARCH":
      return { ...state, serachQuery: action.payload };

    case "CLEAR_FILTER":
      return {
        byStock: false,
        byFastdelivery: false,
        serachQuery: "",
      };

    default:
      return state;
  }
};
