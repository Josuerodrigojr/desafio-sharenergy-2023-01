import React from 'react';
import "./home.css"


function Home(){
  return(
  <div className='formulario'>
  <form>
  <label className="color">Email:</label>
  <input type="text" name="email"></input>
  <label className="color">Senha:</label>
  <input type="password" name="senha"></input>
  <br/>
  <input type="submit" value="Entrar" />
  <br/>
  <p>Remember me</p>
</form>
  </div>
  )
}

export default Home;