/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import api from '../../../services/api'
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'



const Patch = (props:any) =>{

  const history = useHistory();
  const [firstName, setFirstname] = useState(" ")
  const [lastName, setLastname] = useState(" ")
  const [userName, setUserName] = useState("")
  const [telefone, setTelefone] = useState("")
  const [endereco, setEndereco] = useState("")
  const [cpf, setCpf] = useState("")
  const [password, setPassword] = useState('')

  const data = {
    firstName,
    lastName,
    userName,
    telefone,
    endereco,
    cpf,
    password

  }



const edit = async (id:string)=>{
  const response = await api.patch(`/users/${id}`, data)
  if(response.status === 200){
    history.push('/users')
  } else {
    alert(response.data.message)
  }
  
}

  return(
    <div className='formulario'>
    <form>
    <label className="color">Primeiro nome:</label>
    <input value={firstName}  onChange={e => setFirstname(e.target.value)}></input>

    <label className="color">Último nome:</label>
    <input value={lastName}  onChange={e => setLastname(e.target.value)}></input>

    <label className="color">Email:</label>
    <input type="text" value={userName} onChange={e => setUserName(e.target.value)}></input>

    <label className="color">Telefone:</label>
    <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)}></input>

    <label className="color">Endereço:</label>
    <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)}></input>

    <label className="color">Cpf:</label>
    <input type="text" value={cpf} onChange={e => setCpf(e.target.value)}></input>


    <label className="color">Senha:</label>
    <input value={password} onChange={e => setPassword(e.target.value)}></input>
    <br/>
    <Button className='button' onClick={()=> edit(props.match.params.id)}>Editar </Button>
    <Link to='/users'><Button className='button'>Voltar </Button></Link>

  </form>
    </div>
    )
}


export default Patch