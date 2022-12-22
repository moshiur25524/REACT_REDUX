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