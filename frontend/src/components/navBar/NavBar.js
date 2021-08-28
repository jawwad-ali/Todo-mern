import React from 'react'
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const useStyles = makeStyles({
    navBarTextStyle: {
        color: "#fafafa",
        textDecoration: "none"
    },
    root: {
        flexGrow: 1
    }
})

function NavBar() {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    console.log(auth)

    const handleSignOut = () => {
        dispatch(signOut())
        history.push("/signin")
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.root} >
                        <Link className={classes.navBarTextStyle} to="/">
                            Todo Application
                        </Link>
                    </Typography>
                    {
                        auth._id ? (
                            <>
                                <Typography variant="subtitle2" className={classes.root}>
                                    Logged in as {auth.name}
                                </Typography>

                                <Button color="inherit" onClick={() => handleSignOut()}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button color="inherit">
                                    <Link to="/signin" className={classes.navBarTextStyle} >
                                        Login
                                    </Link>
                                </Button>
                                <Button color="inherit">
                                    <Link to="/signup" className={classes.navBarTextStyle} >
                                        SignUp
                                    </Link>
                                </Button>
                            </>
                        )
                    }



                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
