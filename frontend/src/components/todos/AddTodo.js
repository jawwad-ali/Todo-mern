import React, { useState } from "react"
import { TextField, Button } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import { makeStyles } from "@material-ui/styles"
import { addTodo, updateTodo } from "../../store/actions/todoActions"
import { useDispatch } from "react-redux"

const useStyles = makeStyles({
    formStyles: {
        padding: "30px",
        margin: "0px auto",
        boxShadow: "0px 0px 12px -3px #000000",
        borderRadius: "9px",
        display: "flex",
        justifyContent: "space-between"
    },
    submitButton: {
        marginLeft: "20px"
    }
})

const AddTodo = ({ todo, setTodo }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    // handle change
    const handleChange = (e) => {
        setTodo({ ...todo, name: e.target.value })
    }

    // function to be executed on form submit
    const handleSubmit = e => {
        e.preventDefault()

        // if todo id exists it means todo will be update otherwise new todo will be added.
        if (todo._id) {
            const id = todo._id
            const updatedTodo = {
                name: todo.name,
                isComplete: todo.isComplete,
                date: todo.date,
                author: "Ali"
            }
            dispatch(updateTodo(updatedTodo, id))
        }
        else {
            // add todo by dispatch
            const newTodo = { ...todo, date: new Date() }
            dispatch(addTodo(newTodo))
        }

        setTodo({
            name: "",
            isComplete: false
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.formStyles}>
                <TextField variant="outlined" id="enter-todo" label="Enter Todo"
                    autoFocus
                    fullWidth
                    value={todo.name}
                    onChange={handleChange}
                />

                <Button color="primary" variant="contained" type="submit" className={classes.submitButton}>
                    <Send />
                </Button>
            </form>
        </>
    )
}
export default AddTodo