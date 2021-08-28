import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddTodo from './AddTodo'
import ListTodos from './ListTodos'
import { Redirect } from "react-router-dom"

function Todos() {
    const [todo, setTodo] = useState({
        name: "",
        isComplete: false
    })

    const auth = useSelector(state => state.auth)
    if (!auth._id) return <Redirect to="/signin/" />

    return (
        <div>
            <AddTodo todo={todo} setTodo={setTodo} />
            <ListTodos setTodo={setTodo} />
        </div>
    )
}

export default Todos