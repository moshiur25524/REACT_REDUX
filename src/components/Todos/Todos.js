import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlltodos } from '../../Services/Actions/TodoAction';

const Todos = () => {
    const { todos, error, isLoading } = useSelector((store) => store.todosReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAlltodos())
    }, [])

    return (
        <div>
            <h1>Todo app with react-redux</h1>
            {
                isLoading && <h3>Loading...</h3>
            }
            {
                error && <h3>{error.message}</h3>
            }

            <section>
                {
                    todos && todos.map(todo => <article key={todo.id} >
                        <h4>{todo.id}</h4>
                        <p>{todo.title}</p>
                    </article>)
                }
            </section>
        </div>
    );
};

export default Todos;

// we learn from the react-redux fetch data:

/*
 1. install react-redux redux redux-thunk axios
 2. create a function named getAllTodos as an action for request, success, failed for todos
     - we return another function with dispatch parameter using async await
     - In that function, into the dispatch it contain type of todos reques
     - then fetch data through axios and set this res variable
     - then dispath it contain type of success and res.data as payload and those all occured in try statement
     - in the catch statement, dispatch which contain type of todos failed and error.message as payload
     - export the function
3. In the todosReducer, we create a todosInitialState which contain isLoading, todos, error and switch REQUEST, SUCCESS, FAILED with action.payload . { this work is as usual}
4. Store work is as usual. Though we have two reducer, we use combineReducer ojbect and set a variable named rootReducer and set the thunk in the store
5. then, store provider in the root's work is as usual
6. Now, In the todo.js file, we load the state using useSelector and it looks:
    const {error, todos, isLoading} = useSelector(store => store.todosReducer)
    - then, use useEffect to dispatch getAllTodos from todosAction to load data
7. And Finally we show loading and error if it occur. 
8. show data using map if todos exist.
*/