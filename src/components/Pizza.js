import React, {useState} from 'react'
import PizzaModal from './PizzaModal'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'
export default function Pizza({pizza}) {
  const [quantity, setquantity] = useState(1)
  const [variant, setvariant] = useState('small')
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const dispatch = useDispatch()
  function addToCart1(){
    dispatch(addToCart(pizza, quantity, variant))
  }
  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <div onClick={toggleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} alt={pizza.name} className='img-fluid' style={{height:'200px', width:'200px'}}></img>
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1'>
          <p>Varaints</p>
          <select className='form-select' value={variant} onChange={(e)=>{setvariant(e.target.value)}}>
            {pizza.variants.map(variant => {
              return <option value={variant}>{variant}</option>
            })}
          </select>
        </div>

        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select className='form-select' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i+1}>{i+1}</option>
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className='m-1 w-100'>
            <h1 className='mt-1'>Price: {pizza.prices[0][variant] * quantity} AUD</h1>
        </div>
        <div className='m-1 w-100'>
            <button className='btn' onClick={addToCart1}>Add to Cart</button>
        </div>
      </div>
      <PizzaModal basicModal = {basicModal}
                  setBasicModal = {setBasicModal}
                  toggleShow = {toggleShow} 
                  pizzaName = {pizza.name}
                  image = {pizza.image}
                  description = {pizza.description}/>
    </div>
  )
}
