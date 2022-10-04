import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart, removeFromCart} from '../../src/actions/cartActions'

export default function Cartscreen() {
  const dispatch = useDispatch()
  const cartstate = useSelector((state) => state.cartReducer)
  const cartItems  = cartstate.cartItems

  var subTotal = cartItems.reduce((acc, item) => acc + item.price, 0)
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h2 style={{fontSize : '40px'}}>My Cart</h2>
          {cartItems.map((item) => {
            return <div className="flex-container">
            <div className='text-start m-1 w-100'>
              <h1>{item.name} [{item.variant}]</h1>
              <h1>Price: {item.quantity} * {item.prices[0][item.variant]} = 
              {item.price}</h1>
              <h1 style={{display:'inline'}}>Quantity : </h1>
              <i className ="fa-solid fa-plus" onClick={()=>{dispatch(addToCart(item, item.quantity+1,item.variant))}}></i>
              <b>{item.quantity}</b>
              <i className="fa-solid fa-minus" onClick={()=>{dispatch(addToCart(item, item.quantity-1,item.variant))}}></i>
              <hr />
            </div>

            <div className='m-1 w-100'>
              <img src={item.image} alt={item.name} style={{height:'80px', width:'80px'}}/>
            </div>

            <div className='m-1 w-100'>
            <i className="fa-solid fa-trash mt-5" onClick={()=>{dispatch(removeFromCart(item))}}></i>
            </div>
          </div>
          })}


        </div>

        <div className="col-md-4 text-end">
          <h2 style={{fontSize: '50px'}}>SubTotal : {subTotal} AUD</h2>
          <button className='btn'>CHECK OUT</button>
        </div>

      </div>
    </div>
  )
}
