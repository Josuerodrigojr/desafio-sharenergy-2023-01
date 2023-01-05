

import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './style.css'


interface Users{
  picture: {large:string}
  name:{
    first:string
    last:string
  }
  email:string
  login:{
    username:string
  }
  dob:{
    age:number
  }
  

}



function ListUsers() {


  const [users, setUsers] = useState <Users[]>([])
  

  useEffect(() => {
    async function carregaRepositorios () {
      const response = await fetch('https://randomuser.me/api/?results=5');
      const userAll = await response.json();

      setUsers(userAll.results);
    }
    carregaRepositorios();
  }, []);
  

  
 return (
        <>
        <h1 className='color'>Usuários: </h1>
        <section className="container">
          {users.map((user)=>{
            return(
              <Card className="item">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={user.picture.large}
                  alt="users"
                />
                <CardContent>
                  <Typography gutterBottom component="div">
                    <p>Nome: {user.name.first + " " + user.name.last}</p>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  <p>Email: {user.email}</p>
                  <p>Nome do usuário: {user.login.username}</p>
                  <p>Idade: {user.dob.age}</p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            )
          })}
        </section>
         
        </>
    );
}

export default ListUsers;
