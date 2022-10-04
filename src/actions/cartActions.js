

export const addToCart=(sel_pizza, quantity, variant)=>
(dispatch, getState) =>{
  const cartItem = {
    name: sel_pizza.name,
    _id: sel_pizza._id,
    image: sel_pizza.image,
    price: sel_pizza.prices[0][variant],
    quantity: Number(quantity),
    variant : variant,
    prices :sel_pizza.prices,
    price : sel_pizza.prices[0][variant] * quantity
  }
  if(cartItem.quantity > 10){
    alert('Max 10 allowed')
  }
  else{
    if(cartItem.quantity < 1){
      dispatch({type: 'REMOVE_FROM_CART', payload: sel_pizza})
    }
    else{
      dispatch({type: 'ADD_TO_CART', payload: cartItem})
    }

  }
 
  const cartItems = getState().cartReducer.cartItems
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const removeFromCart=(sel_pizza)=>(dispatch, getState)=>{
  dispatch({type: 'REMOVE_FROM_CART', payload: sel_pizza})
  localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
}