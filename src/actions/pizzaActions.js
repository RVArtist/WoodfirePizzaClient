import axios from 'axios';

export const getPizzas = () => async (dispatch) => {
  dispatch({type:'GET_PIZZAS_REQUEST'})
  try{
    const response = await axios.get('/api/pizza/getpizza')
    dispatch({type:'GET_PIZZAS_SUCCESS', payload: response.data})
  } catch (err){
    dispatch({type:'GET_PIZZAS_FAILURE',payload: err})
  }

}