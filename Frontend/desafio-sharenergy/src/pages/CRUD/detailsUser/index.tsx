import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img from '../../../components/img/3por4/imagem2.png'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';



const DetailsUsers = (props:any) =>{
  const history = useHistory();
  const [loading, setLoading] = useState(false)
  const [userName, setUsername] = useState('')
  const [firstName, setFirstname] = useState(" ")
  const [lastName, setLastname] = useState(" ")
  const [telefone, setTelefone] = useState("")
  const [endereco, setEndereco] = useState("")
  const [cpf, setCpf] = useState("")



  useEffect(() => {
    async function carregarRepositoios() {
      setLoading(true)
    
    const response = await api.get(`/users/${props.match.params.id}`)
    setUsername(response.data.user.userName)
    setFirstname(response.data.user.firstName)
    setLastname(response.data.user.lastName)
    setTelefone(response.data.user.telefone)
    setEndereco(response.data.user.endereco)
    setCpf(response.data.user.cpf)

      console.log(userName, 'username')
    setLoading(false)
  
  }
  carregarRepositoios()
  }, []);




const back = () =>{

  history.push(`/users`)

}


return<div className='container'>
 <Card className="item">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image = {img}
                  alt="users"
                />
                <CardContent>
                  <Typography gutterBottom component="div">
                    <p>Nome: {firstName + " " + lastName}</p>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  <p>Email: {userName}</p>
                  <p>Endereço: {endereco}</p>
                  <p>Cpf: {cpf}</p>
                  <p>Telefone: {telefone}</p>
                  </Typography>
                </CardContent>
                <Button onClick={()=>back()}>Voltar</Button>
              </CardActionArea>
            </Card>

</div>
}

export default DetailsUsers