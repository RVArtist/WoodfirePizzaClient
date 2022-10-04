import axios from "axios"

export const registerUser = (user) => async dispatch=>{
  dispatch({type: 'USER_REGSITER_REQUEST'})
  try {
    const response = await axios.post('/api/user/register', user)
    console.log(response)
    dispatch({type: 'USER_REGSITER_SUCCESS'})
  } catch (error) {
    dispatch({type: 'USER_REGSITER_FAILED', payload: error})
  }
}