import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import './style.css'




const Delete = ()=>{

const history = useHistory()


const back = () =>{
  history.push('/users')
}
  return(

    <div className='pageDelete'>
    <img src='https://media.tenor.com/HxIJIDEpTs8AAAAM/deleting-deleted.gif'/>

    <Button  onClick={()=> back()}> Voltar</Button>
    </div>
  )
}


export default Delete