import React, { useState } from 'react'
import AddTodo from './AddTodo'
import ListTodos from './ListTodos'

function Todos() {
    const [todo, setTodo] = useState({
        name: "",
        isComplete: false
    })

    return (
        <div>
            <AddTodo todo={todo} setTodo={setTodo} />
            <ListTodos setTodo={setTodo} />
        </div>
    )
}

export default Todos