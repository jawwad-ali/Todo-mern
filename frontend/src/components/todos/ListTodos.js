import React, { useEffect } from 'react'
import { Typography } from "@material-ui/core"
import Todo from './Todo'
import { makeStyles } from "@material-ui/styles"
import { getTodos } from "../../store/actions/todoActions"
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles({
    listTodoContainer: {
        margin: "20px auto",
        padding: "20px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px black"
    }
})

function ListTodos({ setTodo }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    // getting the state of todo from redux store
    const todos = useSelector((state) => state.todos)
    console.log(todos)

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    return (
        <>
            <div className={classes.listTodoContainer}>
                <Typography variant="h5">
                    {todos.length > 0 ? "The Todos" : "No todos to display"}
                </Typography>
                {todos && todos.map((todo) => {
                    return (
                        <Todo
                            todo={todo}
                            key={todo._id}
                            setTodo={setTodo}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default ListTodos
