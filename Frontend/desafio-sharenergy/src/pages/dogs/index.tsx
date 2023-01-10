import { Button } from 'react-bootstrap';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './style.css'


function Dog(){
  const [loading, setLoading] = useState(false)
  const [sorteio, setSorteio] =useState(0)
  const [dogs, setDogs] = useState([])



  useEffect(() => {
    async function carregaRepositorios () {
      setLoading(true)
      const response = await fetch('https://random.dog/doggos');
      const userDogs = await response.json();

      for (let i=0; i<=userDogs.length; i++){
        if(userDogs[i].includes(".mp4") || userDogs[i].includes(".gif")){
          userDogs.splice(i, 1)
          setDogs(userDogs);
        } 
      }

      setLoading(false)
    }
    carregaRepositorios();
  }, []);



  
const refresh = ()=>{
  const teste = Math.floor(Math.random() * dogs.length)
  setSorteio(teste)
}

return(
  <div>
    <div className='page'>
 <Link to='/cats'><Button>Cats <img src='icons8-gato-preto-50.png' className='img'></img></Button></Link>
 <Link to='/users'><Button>User <img src='icons8-usuário-80.png' className='img'></img></Button></Link>
 </div>
 <div className='center'>
    <Card className="item">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={`https://random.dog/${dogs[sorteio]}`  }
                  alt="users"
                />

              </CardActionArea>
            </Card>
  <Button className='button' value="Botão de Atualizar" onClick={()=> refresh()}>Atualizar</Button> 

  </div>

  </div>
)
}

export default Dog