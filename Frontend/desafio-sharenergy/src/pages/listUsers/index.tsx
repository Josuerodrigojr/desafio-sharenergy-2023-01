import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './style.css'
import { Link } from 'react-router-dom';


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

  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(12)

  const [users, setUsers] = useState <Users[]>([])

  useEffect(() => {
    async function carregaRepositorios () {
      setLoading(true)
      const response = await fetch('https://randomuser.me/api/?results=51');
      const userAll = await response.json();

      setUsers(userAll.results);
      setLoading(false)
    }
    carregaRepositorios();
  }, []);
  

  const indexOfLastPost = currentPage*postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentUsers = users.slice(indexOfFirstPost,indexOfLastPost)
  
  const pageNumbers = [];

  for(let i = 1; i<=Math.ceil(users.length/postsPerPage); i++){
    pageNumbers.push(i)
  }

  const paginate = (pageNumber:number) => {

    setCurrentPage(pageNumber)};

    function handleSubmit(e:any) {
      e.preventDefault();
   
    }

 return (
        <>
        <h1 className='color'>Usuários</h1>
        <section className="container" >
          {currentUsers.map((user)=>{
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

        <nav>
 <ul className='pagination' >
  {pageNumbers.map(number=>(
    <li key={number} className='active'>
      <Link to={`/listUsers/${number}`} onSubmit={handleSubmit} onClick={()=> paginate(number)} className='action'>
        {number}
      </Link>

    </li>
  ))}
 </ul>
 
 </nav>


         
        </>
    );
}

export default ListUsers;
