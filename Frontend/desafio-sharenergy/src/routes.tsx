import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/home"
import ListUsers from "./pages/listUsers/index"
import Cabecalho from "./components/cabecalho"
import Cat from "./pages/cats"
import Dog from './pages/dogs'
import Read from "./pages/CRUD/read"
import Create from './pages/CRUD/post'
import Delete from './pages/CRUD/delete'
import DetailsUsers from "./pages/CRUD/detailsUser"
import Patch from "./pages/CRUD/patch"
import Erro from "./pages/erro"
function Routes(){
  return(
    <BrowserRouter>
    <Cabecalho/>
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/listUsers" component={ListUsers} exact/>
    <Route path="/listUsers/:number" component={ListUsers} exact/>
    <Route path='/cats' component={Cat} exact/>
    <Route path='/erro' component={Erro} exact/>
    <Route path='/dogs' component={Dog} exact/>
    <Route path='/users' component={Read} exact/>
    <Route path='/users/create' component={Create} exact/>
    <Route path='/users/delete' component={Delete} exact/>
    <Route path='/users/:id' component={DetailsUsers} exact/>
    <Route path='/users/edit/:id' component={Patch} exact/>
    
    </Switch>
    </BrowserRouter>
  )
}

export default Routes