import React, {useEffect, useState} from 'react'
import './style.css'
import api from '../../../services/api'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import { Link, useHistory } from 'react-router-dom';




interface User{

  userName: string
}
const Read = ()=>{

const history = useHistory();
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function carregarRepositoios() {
      setLoading(true)
    
    const response = await api.get('/users')
    setUsers(response.data.user)

    setLoading(false)
  
  }
  carregarRepositoios()
  }, []);

  const remove = async (id:any)=>{
    await api.delete(`/users/${id}`)
    setUsers(users)
    history.push('users/delete')
  
}

const details = (id:string)=>{
  history.push(`/users/${id}`)
}

const edit = (id:string)=>{
  history.push(`/users/edit/${id}`)
}



  return(
<>
<div>
<div className='page'>
 <Link to='/dogs'><Button>Dogs <img src='icons8-dog-swim-64.png' className='img'></img></Button></Link>
 <Link to='/users/create'><Button>Create user <img src='icons8-usuário-80.png' className='img'></img></Button></Link>
 </div>
</div>
<section className="container" >
    {users.map((user:any)=>{
      console.log(user._id)
      return(
      <Card  className='espacamento'>
      <CardContent >
         <Typography variant="h6" component="div">
          Nome: {user.firstName }
        </Typography>
        <Typography variant="body2">
        Email: {user.userName}
        </Typography>

      </CardContent>
      <CardActions className='botons'>
        <Button onClick={()=>details(user._id)}>Detalhes</Button>
        <br/>
        <Button onClick={()=>edit(user._id)}>Editar</Button>
        <br/>
        <Button  onClick={()=>remove(user._id)}>Deletar</Button>
      </CardActions>
    </Card>
    )
    })}
    </section>
    
  </>
  )
}


export default Read