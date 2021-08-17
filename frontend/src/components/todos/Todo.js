import React from 'react'
import { Button, ButtonGroup, Typography } from "@material-ui/core"
import { CheckCircle, Create, Delete } from '@material-ui/icons'
import { makeStyles } from "@material-ui/styles"

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
    }
})

function Todo() {
    const classes = useStyles()
    return (
        <>
            <div className={classes.container}>
                <div className={classes.todoText}>
                    <Typography variant="subtitle1">
                        Learn React
                    </Typography>
                    <Typography variant="body2">
                        Author:Ali
                    </Typography>
                    <Typography variant="body2">
                        Added:4 days ago
                    </Typography>
                </div>
                <div>
                    <ButtonGroup size="small" aria-label="outlined primary button group" >
                        <Button>
                            <CheckCircle color="action" />
                        </Button>
                        <Button>
                            <Create color="primary" />
                        </Button>
                        <Button>
                            <Delete color="secondary" />
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </>

    )
}

export default Todo
