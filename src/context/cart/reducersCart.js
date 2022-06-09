const ADD_PRODUCT = "ADD_PRODUCT";
const MINUS_REMOVE_PRODUCT = "MINUS_REMOVE_PRODUCT";
const REMOVE_FULL_PRODUCT = "REMOVE_FULL_PRODUCT";
const TOTAL_PRICE = "TOTAL_PRICE";
const PLUSE_ADD_PRODUCT = "PLUSE_ADD_PRODUCT";


// ============Add product to cart shopping
const addProductToCart = (payloade, state) => {
  console.log("adding product", payloade);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === payloade.plant.id
  );
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...payloade.plant, quantity: payloade.count });
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity = payloade.count;
    //   updatedItem.price=product.price*updatedItem.quantity;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

// ============Increase quantity products in cart shopping
const pluseProductToCart = (payloade, state) => {
  console.log("adding product", payloade);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === payloade
  );
  // if (updatedItemIndex < 0) {
  // updatedCart.push({ ...payloade.plant, quantity:  payloade.count });
  // } else {
  const updatedItem = { ...updatedCart[updatedItemIndex] };
  updatedItem.quantity++;
  // updatedItem.price=product.price*updatedItem.quantity;
  updatedCart[updatedItemIndex] = updatedItem;
  // }

  return { ...state, cart: updatedCart };
};

// ============
const minusProductFromCart = (payloade, state) => {
  console.log("remove product: " + payloade);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === payloade);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  //  updatedItem.price=product.price*updatedItem.quantity;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

// ============
const removeProductFromCart = (payloade, state) => {
  console.log("remove product: " + payloade);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === payloade);


  updatedCart.splice(updatedItemIndex, 1);
  return { ...state, cart: updatedCart };
};

// ============
const totalPrice = (state) => {
  let sum = 0;
  const cart = [...state.cart];
  cart.map(item => sum = (item.price * item.quantity) + sum
  )

  return { ...state, totalPrice: sum.toFixed(2) };
};

// ============Reducer cart shopping
export const reducersCart = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.payloade, state);
    case PLUSE_ADD_PRODUCT:
      return pluseProductToCart(action.payloade, state);
    case MINUS_REMOVE_PRODUCT:
      return minusProductFromCart(action.payloade, state);
    case REMOVE_FULL_PRODUCT:
      return removeProductFromCart(action.payloade, state);
    case TOTAL_PRICE:
      return totalPrice(state);
    default:
      return state;
  }
};
