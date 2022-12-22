import { TODOS_FAILED, TODOS_REQUEST, TODOS_SUCCESS } from "../Constants/todosConstants";

const initialTodoState = {
    isLoading: false,
    todos: [],
    error: null
}

const todosReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case TODOS_SUCCESS:
            return {
                todos: action.payload,
                isLoading: false,
                error: null
            }
        case TODOS_FAILED:
            return {
                isLoading: false,
                todos: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default todosReducer;