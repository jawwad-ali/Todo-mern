import React from 'react'
import { Button, ButtonGroup, Typography } from "@material-ui/core"
import { CheckCircle, Create, Delete } from '@material-ui/icons'
import { makeStyles } from "@material-ui/styles"
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { checkTodo, deleteTodo } from '../../store/actions/todoActions'

const useStyles = makeStyles({
    container: {
        display: "flex",
        margin: "10px auto",
        border: "2px solid #bdbdbd",
        borderRadius: "9px",
        padding: "20px",
    },
    todoText: {
        flex: 1,
    },
    isComplete: {
        color: "green"
    },
    checked: {
        textDecoration: "line-through"
    }
})

function Todo({ todo, setTodo }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleClickUpdate = () => {
        setTodo(todo)
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        })
    }

    const handleCheck = (id) => {
        dispatch(checkTodo(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    return (
        <>
            <div className={classes.container}>
                <div className={classes.todoText}>
                    {
                        todo.isComplete ? (<Typography variant="subtitle1" className={classes.checked} >
                            {todo.name}
                        </Typography>) : <Typography variant="subtitle1">
                            {todo.name}
                        </Typography>
                    }

                    <Typography variant="body2">
                        Author:Ali
                    </Typography>
                    <Typography variant="body2">
                        Added:{moment(todo.date).fromNow()}
                    </Typography>
                </div>
                <div>
                    <ButtonGroup size="small" aria-label="outlined primary button group" >
                        <Button onClick={() => handleCheck(todo._id)}> {todo.isComplete ? (
                            <CheckCircle color="action" className={classes.isComplete} />
                        ) :
                            <CheckCircle color="action" />
                        }
                        </Button>
                        <Button>
                            <Create color="primary" onClick={() => handleClickUpdate()} />
                        </Button>
                        <Button onClick={() => handleDelete(todo._id)}>
                            <Delete color="secondary" />
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </>

    )
}

export default Todo
