import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/home"
import ListUsers from "./pages/listUsers/index"
import Cabecalho from "./components/cabecalho"

function Routes(){
  return(
    <BrowserRouter>
    <Cabecalho/>
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/listUsers" component={ListUsers} exact/>
    <Route path="/listUsers/:number" component={ListUsers} exact/>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes