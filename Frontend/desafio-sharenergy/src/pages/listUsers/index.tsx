import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './style.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

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

const [selecao, setSelecao] = useState("")
const [caixa, setCaixa] = useState("")
const pageNumbers = [];
const [loading, setLoading] = useState(false)
const [currentPage, setCurrentPage] = useState(1)
const [postsPerPage, setPostsPerPage] = useState(15)
const [enter, setEnter] = useState(false)
const [users, setUsers] = useState <Users[]>([])

  useEffect(() => {
    async function carregaRepositorios () {
      setLoading(true)
      const response = await fetch('https://randomuser.me/api/?results=100');
      const userAll = await response.json();

      setUsers(userAll.results);
      setLoading(false)
    }
    carregaRepositorios();
  }, []);
  

  const indexOfLastPost = currentPage*postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  let currentUsers = users.slice(indexOfFirstPost,indexOfLastPost)

  for(let i = 1; i<=Math.ceil(users.length/postsPerPage); i++){
    pageNumbers.push(i)
  }

  const paginate = (pageNumber:number) => {
    setCurrentPage(pageNumber)};

  function handleSubmit(e:any) {
      e.preventDefault(); 
    }
const busca = (e:any) =>{
  
if(e.keyCode === 13){
setEnter(true)
} else {
  setEnter(false)
}
}

const filtro = (selecao:string, caixa:string)=>{
  if(enter===true){  
  return users.filter((user)=>{
    if(selecao==='name.first' && caixa !== ""){
     if(user.name.first === caixa){
       return user    
     }
    }  else if(selecao==='email' && caixa !== ""){
      if(user.email === caixa){
        return user    
       }
    } else if(selecao ==='login.username' && caixa !==""){
      if(user.login.username === caixa){
        return user
      }
    }
  }
  )
  }else{
    return currentUsers
  }
}

 return (
        <>
        <h1 className='color'>Usuários:</h1>
        <div className='busca'>

                <select name="selecao" value={selecao} onChange={option => setSelecao(option.target.value)}>
                    <option value=""  >Selecione uma opção</option>
                    <option value="name.first" >Nome</option>
                    <option value="email">Email</option>
                    <option value="login.username">Nome do usuário</option>                 
                </select>
                <input type='text' placeholder='Buscar' value={caixa} onChange={option => setCaixa(option.target.value)} onKeyDown={(e)=>busca(e)} />
                <br/>
                <Link to='/cats'><Button>Cats <img src='icons8-gato-preto-50.png'></img></Button></Link>
            </div>

        <section className="container" >
          {filtro(selecao, caixa).map((user:any)=>{
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

        <nav className='barra'>
 <ul className='pagination' >
  {pageNumbers.map(number=>(
    <li key={number} className='active'>
      <Link to={`/listUsers/${number}`} onSubmit={handleSubmit} onClick={()=> paginate(number)} className='action'>
        {number}
      </Link>

    </li>
  ))}
 </ul>
 
 </nav >      
</>
    );
}

export default ListUsers;
