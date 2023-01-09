import { bcry } from './../utils/hash';
import { UserRepository } from './../repositories/UserRepositories';







export const UserService ={
  getUsers: async()=>{

    try{
      const user = await UserRepository.getUsers();

      return{
        statusCode: 200,
        data:{
          message:'Usuários retornados com sucesso',
          user: user
        }

      }


    } catch (err) {
      return {
          statusCode: 500,
          data: {
              message: 'Erro ao retornar os usuários',
              err: err
          }
      }
  }





  },

  createUsers: async(cpf:string, firstName:string, lastName:string, userName:string, password:string, endereco:string, telefone:string)=>{
    
    try{
      const passwordHash = await bcry.make(password)
      password = passwordHash
      const user = {cpf, firstName, lastName, userName, password, endereco, telefone}
      if(!cpf || !firstName || !lastName || !userName||!password || !endereco || !telefone){
        return{
          statusCode: 201,
          data:{
            message: "Todos os campos devem ser preenchidos",
            }
        }
      }

      const getUserCpf = await UserRepository.getUsersCPF(cpf)
      if(getUserCpf){
        return{
          statusCode: 201,
          data:{
            message: "Não pode ser feito o cadastro, pois o CPF já está cadastrado"
          }
        }
      }
      
      const getUseruserName = await UserRepository.getUsersUserName(userName)
      if(getUseruserName){
        return{
          statusCode: 201,
          data:{
            message: "Não pode ser feito o cadastro, pois o email já está cadastrado"
          }
        }
      }

      const createUser = await UserRepository.createUsers(user)


      return{
        statusCode: 200,
        data:{
          message: 'Usuário cadastrado com sucesso',
          user:createUser
        }
      }
    } catch(err){
      return {
        statusCode: 500,
        data: {
            message: 'Erro ao cadastrar usuário',
            err: err
        }
    }

    }

  },

  deleteUsers: async(id:string)=>{
    try{
      const deleteUser = await UserRepository.deleteUsers(id);

      if(!deleteUser){
        return{
          statusCode:400,
          data:{
            message: 'O usuário não existe'
          }
        }
      }
      return{
        statusCode: 201,
        data:{
          message: 'O usuário foi deletado',
          user:deleteUser
        }
      }
    }catch(err){
      return{
        statusCode: 500,
        data:{
          message: 'Erro ao excluir o usuário',
          err:err
        }
      }

    }

    
  },

  updateUsers: async(id:string, user:object)=>{
    try{
      const uploadUser = await UserRepository.updateUsers(id, user)
      return{
        statusCode: 200,
        data:{
          message: "Usuário atualizado com sucesso",
          user: uploadUser
        }
      }
      

    } catch(err){
      return{
        statusCode: 500,
        data:{
          message: 'Erro ao alterar o usuário',
          err:err
        }
      }

    }
  },

  loginUsers: async(userName:string, password:string)=>{
    try{
    const user = await UserRepository.getUsersUserName(userName);

    if(!user){
      return {
        statusCode: 204,
        data:{
          message: "O usuário não existe"
        }
      }
    }

    const userPassword = await bcry.compare(password, user.password)
    if(!userPassword){
      return {
        statusCode: 204,
        data:{
          message: "O userName e/ou senha inválidos"
        }
      }
    }




    return{
      statusCode:200,
      data:{
        message: "Login efetuado com sucesso"
      }
    }
  }catch(err){
    return{
      statusCode: 500,
      data:{
        message: 'Erro ao alterar o usuário',
        err:err
      }
    }

  }

    
  },

  loginRemember: async(cpf:string)=>{
    try{
      const user = await UserRepository.getUsersCPF(cpf)
      console.log(user)
      if(user){
        return {
          statusCode: 200,
          data:{
            message: 'Usuário cadastrado no sistema, login efetuado com sucesso',
            user:user
          } 
        }
      } else {
        return{
          statusCode: 204,
          data: 'Não foi possível efetuar o login, pois o cpf digitado não está cadastrado no sistema'
        }
      }
    } catch(err){
      return{
        statusCode: 500,
        data: err
      }
    }
  },

  getId: async(id:string) =>{
    try{
      const user = await UserRepository.getUserId(id)

      if(user){
        return {
          statusCode: 200,
          data:{
            message: 'Usuário cadastrado no sistema',
            user:user
          } 
        }
      } else {
        return{
          statusCode: 400,
          data: 'Não foi possível efetuar o login, pois o id digitado não está cadastrado no sistema'
        }
      }
    } catch(err){
      return{
        statusCode: 500,
        data: err
      }
    }

  }

  
}