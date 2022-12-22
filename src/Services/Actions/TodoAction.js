import axios from 'axios'
import { TODOS_REQUEST, TODOS_FAILED, TODOS_SUCCESS } from '../Constants/todosConstants.js'

export const getAlltodos = () => async (dispatch) => {
    dispatch({ type: TODOS_REQUEST })
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        dispatch({ type: TODOS_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: TODOS_FAILED, payload: error.message })
    }
}
