
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function Erro(){

return(
  <div className='center'>

  <img src={'https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png'}></img>
  <Link to='/cats'><Button>Voltar</Button></Link>
  </div>
)
}

export default Erro