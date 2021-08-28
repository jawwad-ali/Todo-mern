import React, { useState } from 'react'
import { makeStyles } from "@material-ui/styles"
import { Button, TextField, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

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


function SignUp() {
    const classes = useStyles()
    const initialState = {
        name: "",
        email: "",
        password: ""
    }
    const dispatch = useDispatch()

    // collecting state from the store
    const auth = useSelector(state => state.auth)

    const [user, setUser] = useState(initialState)
    console.log(user.name)

    // handle Submit
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signUp(user))
        setUser(initialState)
    }

    // if user if logged/SignedIn user will redirect to home page
    if (auth._id) return <Redirect to="/" />

    return (
        <>
            <form className={classes.loginForm} onSubmit={handleSubmit} >
                <Typography variant="h5">Sign Up</Typography>
                <TextField
                    className={classes.textFieldSpacing}
                    id="enter-name"
                    label="Enter Name"
                    variant="outlined"
                    fullWidth
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <TextField
                    className={classes.textFieldSpacing}
                    id="enter-email"
                    label="Enter Email"
                    variant="outlined"
                    fullWidth
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}

                />
                <TextField
                    className={classes.textFieldSpacing}
                    id="enter-password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}

                />
                <Button
                    className={classes.textFieldSpacing}
                    type="submit" variant="contained" color="primary" >Sign Up</Button>
            </form>
        </>
    )
}

export default SignUp
