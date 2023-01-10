import { Button } from 'react-bootstrap';
import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import './style.css'


function Cat(){
  const history = useHistory()
  const [http, setHttp] = useState("")
const httpCats = () =>{

  if(parseInt(http)<100 || (parseInt(http)>103 && parseInt(http)<200) || parseInt(http)===205 || (parseInt(http)>207 && parseInt(http)<300) || parseInt(http) ===306 || (parseInt(http)>309 && parseInt(http)<400) || parseInt(http) === 419 || (parseInt(http)>426 && parseInt(http)<429) || parseInt(http) ===430  || (parseInt(http)>431 && parseInt(http)<444)  || (parseInt(http)>444 && parseInt(http)<450)  || (parseInt(http)>451 && parseInt(http)<497) || parseInt(http) ===505  || (parseInt(http)>511 && parseInt(http)<521) || parseInt(http)===524  || (parseInt(http)>525 && parseInt(http)<599) || parseInt(http)>599 ){
    history.push('/erro')
  } else{
    window.location.replace(`https://http.cat/${http}`)
  }
 
  
}
return(
  <>
  <div className='page'>
  <Link to='/listUsers'><Button>List users <img src='icons8-chamada-em-conferência-80.png' className='img'/></Button></Link>

    <Link to='/dogs'><Button>Dogs <img src='icons8-dog-swim-64.png' className='img'/></Button></Link>

  </div>
  <div className='center'>
  <input type='text' value={http} onChange={(e)=> setHttp(e.target.value)}/>

 <Button onClick={()=>httpCats()}>Buscar</Button>

  </div>
  </>
)
}

export default Cat