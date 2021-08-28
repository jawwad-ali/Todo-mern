import React, { useState } from 'react'
import { makeStyles } from "@material-ui/styles"
import { Button, TextField, Typography } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

const useStyles = makeStyles({
    loginForm: {
        margin: "0px auto",
        padding: "30px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px black"
    },
    textFieldSpacing: {
        marginTop: "20px"
    }
})

function SignIn() {
    const classes = useStyles()
    const initialState = {
        email: "",
        password: ""
    }
    const [creds, setCreds] = useState(initialState)
    const dispatch = useDispatch()

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signIn(creds))
        setCreds(initialState)
    }

    // collecting state from the store
    const auth = useSelector(state => state.auth)
    if (auth._id) return <Redirect to="/" />

    return (
        <>
            <form onSubmit={handleSubmit} className={classes.loginForm}>
                <Typography variant="h5">LOGIN</Typography>
                <TextField
                    className={classes.textFieldSpacing}
                    id="enter-email"
                    label="Enter Email"
                    variant="outlined"
                    fullWidth
                    value={creds.email}
                    onChange={(e) => setCreds({ ...creds, email: e.target.value })}
                />
                <TextField
                    className={classes.textFieldSpacing}
                    id="enter-password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={creds.password}
                    onChange={(e) => setCreds({ ...creds, password: e.target.value })}

                />
                <Button
                    className={classes.textFieldSpacing}
                    type="submit" variant="contained" color="primary" >Sign In</Button>
            </form>
        </>
    )
}

export default SignIn
