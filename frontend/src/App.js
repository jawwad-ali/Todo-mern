import React, { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { NavBar, SignIn, SignUp, Todos } from "./components/index"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux"
import { loadUser } from "./store/actions/authActions"

const useStyles = makeStyles({
  contentStyles: {
    margin: "30px auto"
  }
})

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <>
      <Container maxWidth="lg">
        <BrowserRouter>
          <ToastContainer />
          <NavBar />

          <Container className={classes.contentStyles} maxWidth="sm" >
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/" component={Todos} />
            </Switch>
          </Container>



        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
// start from jwt token video