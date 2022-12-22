import { DECREMENT, INCREMENT, RESET } from "../Constants/counterConstant"

export const incrementCount = () =>{
    return {
        type: INCREMENT
    }
}
export const decrementCount = () =>{
    return {
        type: DECREMENT
    }
}
export const resetCount = () =>{
    return {
        type: RESET
    }
}