import React, {useState} from 'react';
import "./style.css"
import { Link } from 'react-router-dom';


function Home(){

  return(
  <div className='formulario'>
  <form>
  <label className="color">Email:</label>
  <input type="text" name="email"></input>
  <label className="color">Senha:</label>
  <input type="password" name="senha"></input>
  <br/>
  <Link to='/listUsers'><input type="submit" value="Entrar" /></Link>
  <br/>
  <p>Remember me</p>
</form>
  </div>
  )
}

export default Home;