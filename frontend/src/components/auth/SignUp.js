import React from 'react'
import { makeStyles } from "@material-ui/styles"
import { Button, TextField, Typography } from '@material-ui/core'

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
    return (
        <>
            <form className={classes.loginForm}>
                <Typography variant="h5">Sign Up</Typography>
                <TextField
                    className={classes.textFieldSpacing}
                    id="enter-name"
                    label="Enter Name"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    className={classes.textFieldSpacing}
                    id="enter-email"
                    label="Enter Email"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    className={classes.textFieldSpacing}
                    id="enter-password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                />
                <Button
                    className={classes.textFieldSpacing}
                    type="submit" variant="contained" color="primary" >Sign Up</Button>
            </form>
        </>
    )
}

export default SignUp
