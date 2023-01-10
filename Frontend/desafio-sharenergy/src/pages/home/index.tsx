import React, {useState} from 'react';
import "./style.css"
import {  useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Button } from 'react-bootstrap';


function Home(){

  const history = useHistory();
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [cpf, setCpf] = useState('')

  const dados = {
    userName,
    password,
    cpf
  }

  const login = async ()=>{

    const response = await api.post('users/login', dados)
    
    if(response.status === 200){
      history.push('/listUsers')
    } else  {
      alert('Email ou senha inválidos')
    }

  }

  const loginCpf = async()=>{
    const response = await api.post('/users/loginCpf', dados)

    if(response.status === 200){
      history.push('/listUsers')
    } else{
      alert('Cpf não cadastrado no sistema')
    }
  }
 

  return(

  <div className='formulario'>
  <form>
  <label className="color">Email:</label>
    <input type="email" value={userName} onChange={e => setUserName(e.target.value)}></input>
    <label className="color">Senha:</label>
    <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
  <br/>
  <Button className='button' onClick={()=> login()}>Entrar </Button>
  <br/>
  <p>ou utilize seu cpf</p>
  <input type='tel' pattern="[0-9]{11}" value={cpf} onChange={e => setCpf(e.target.value)}></input>
  <Button className='button' onClick={()=> loginCpf()}>Remember me </Button>
</form>
  </div>

  )
}

export default Home;