export const order_actions = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        order_items: state.order_items.map((item: any) =>
          item.name === payload.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT":
      return {
        ...state,
        order_items: state.order_items
          .map((item: any) =>
            item.name === payload.name
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item: any) => item.quantity !== 0),
      };

    case "ADD":
      const isExist = state.order_items.find(
        (item: any) => item.name === payload.name
      );
      return {
        ...state,
        order_items: isExist
          ? state.order_items.map((item: any) =>
              item.name === payload.name
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.order_items, { ...payload, quantity: 1 }],
      };

    case "REMOVE":
      return {
        ...state,
        order_items: state.order_items.filter(
          (item: any) => item.name !== payload.name
        ),
      };

    default:
      return state;
  }
};
