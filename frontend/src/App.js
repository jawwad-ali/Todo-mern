import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { NavBar, SignIn, SignUp, Todos } from "./components/index"
import { Container } from "@material-ui/core"

function App() {
  return (
    <>
      <Container maxWidth="md">
        <BrowserRouter>
          <NavBar />

          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={Todos} />
          </Switch>

        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
// Start from forms and icons
