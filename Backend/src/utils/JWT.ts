import JWT from 'jsonwebtoken'


export const jwt ={
  generate: (id:string)=>{
     JWT.sign({userId: id}, 'sharenergy', {algorithm: 'HS256'}, function(err:string, token:string){
      if(err){
        return{
          statusCode: 500,
          data:{
            message: 'Erro',
            err:err
          }
        }

      }
     return token

    })


  }
  
} 