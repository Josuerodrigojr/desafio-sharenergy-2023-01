import { UserRepository } from './../repositories/UserRepositories';
import User from "../schema/User";





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

  createUsers: async(cpf:string, firstName:string, lastName:string, email:string)=>{
    
    try{
      const user = {cpf, firstName, lastName, email}
      if(!cpf || !firstName || !lastName || !email){
        return{
          statusCode: 400,
          data:{
            message: "Todos os campos devem ser preenchidos",
            }
        }
      }

      

      const createUser = await UserRepository.createUsers(user)


      return{
        statusCode: 201,
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
        statusCode: 201,
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
  }
}