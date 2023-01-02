import { UserService } from './../service/UserService';
import {Request, Response} from 'express'


class UserController {
  public async index (req: Request, res:Response): Promise<Response>{
   const response = await UserService.getUsers();
   
   return res.status(response.statusCode).json(response.data)

   

   
  }

  public async create (req: Request, res:Response): Promise<Response>{
    const {cpf, firstName, lastName, email} = req.body;
    const response = await UserService.createUsers(cpf, firstName, lastName, email)
    return res.status(response.statusCode).json(response.data)
    




  }

  public async delete (req:Request, res:Response): Promise<Response>{
    const id = req.params.id

    const response = await UserService.deleteUsers(id)
    return res.status(response.statusCode).json(response.data)
    
    

  }

  public async update (req:Request, res:Response): Promise<Response>{
    const id = req.params.id
    const user = req.body
    const response = await UserService.updateUsers(id, user)
    return res.status(response.statusCode).json(response.data)
  }




}


export default new UserController()